import { getProjectsList } from "../../lib/notion";
import s from "./Projects.module.sass";
import useTransitionOnScroll from "../../hooks/useTransitionOnScroll";
import { useRef } from "react";
import Project from "../../components/Project/Project";
import axios from "axios";

export async function getStaticProps() {
  const projects = await getProjectsList({
    property: "Status",
    select: {
      equals: "Live",
    },
  });

  for (let i = 0; i < projects.length; i++) {
    const desktopImage = await axios.get(
      projects[i].properties["Desktop image"].files[0].file.url,
      { responseType: "arraybuffer" }
    );
    const mobileImage = await axios.get(
      projects[i].properties["Mobile image"].files[0].file.url,
      { responseType: "arraybuffer" }
    );
    const rawDesktop = Buffer.from(desktopImage.data).toString("base64");
    const rawMobile = Buffer.from(desktopImage.data).toString("base64");
    const desktopBase64Image =
      "data:" + desktopImage.headers["content-type"] + ";base64," + rawDesktop;
    const mobileBase64Image =
      "data:" + desktopImage.headers["content-type"] + ";base64," + rawMobile;

    projects[i].properties["Desktop image"].files[0].file.url =
      desktopBase64Image;
    projects[i].properties["Mobile image"].files[0].file.url =
      mobileBase64Image;
  }

  return { props: { projects } };
}

const Projects = (props) => {
  const refs = useRef([]);
  useTransitionOnScroll(refs.current, s.fadeIn);
  console.log(props);

  return (
    <div>
      <h2 className={s.projects_title} ref={(ref) => refs.current.push(ref)}>
        My projects
      </h2>
      <div className={s.container}>
        {props.projects.map(({ id, properties }) => (
          <Project
            key={id}
            name={properties["Name"].title[0]?.plain_text}
            description={properties["Description"].rich_text[0]?.plain_text}
            desktopImg={properties["Desktop image"].files[0]?.file.url}
            mobileImg={properties["Mobile image"].files[0]?.file.url}
            mainTechnologies={properties["Main technologies"]?.multi_select}
            repo={properties["Repo URL"].url}
            live={properties["Live URL"].url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
