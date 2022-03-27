import { getProjectsList } from "../../lib/notion";
import s from "./Projects.module.sass";
import useTransitionOnScroll from "../../hooks/useTransitionOnScroll";
import { useRef } from "react";
import Project from "../../components/Project/Project";

export async function getStaticProps() {
  const projects = await getProjectsList({
    property: "Status",
    select: {
      equals: "Live",
    },
  });

  return { props: { projects } };
}

const Projects = (props) => {
  const refs = useRef([]);
  useTransitionOnScroll(refs.current, s.fadeIn);

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
            desktopImg={properties["Desktop image"]?.url}
            mobileImg={properties["Mobile image"]?.url}
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
