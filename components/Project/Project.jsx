import { useEffect, useState } from "react";
import s from "./Project.module.sass";
import Image from "next/image";

function Chip({ text }) {
  return <div className={s.chip}>{text}</div>;
}

export default function Project({
  name,
  description,
  desktopImg,
  mobileImg,
  mainTechnologies,
  repo,
  live,
}) {
  const [viewportwidth, setViewportWidth] = useState();

  useEffect(() => {
    setViewportWidth(window.innerWidth);

    const viewportWidthSetter = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", viewportWidthSetter);
    return () => {
      window.removeEventListener("resize", viewportWidthSetter);
    };
  }, [setViewportWidth]);

  return (
    <div className={s.picture_container}>
      <div className={s.picture_image}>
        {viewportwidth < 650 ? (
          <Image
            src={mobileImg}
            alt={name}
            width={361}
            height={768}
            layout="responsive"
            quality={70}
            priority
          />
        ) : (
          <Image
            src={desktopImg}
            alt={name}
            width={1345}
            height={841}
            layout="responsive"
            quality={70}
            priority
          />
        )}
      </div>

      <div className={s.overlay}>
        <div>
          <h2 className={s.overlay_title}>{name}</h2>
          <p className={s.overlay_description}>{description}</p>
          <ul className={s.technologies}>
            {mainTechnologies.map((technology) => (
              <Chip key={technology.name} text={technology.name} />
            ))}
          </ul>
        </div>

        <ul className={s.links}>
          {repo && (
            <li>
              <a href={repo} target="_blank" rel="noopener noreferrer">
                View repo
              </a>
            </li>
          )}
          {live && (
            <li>
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live website
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
