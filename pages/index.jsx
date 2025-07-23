import Image from "next/image";
import { useRef } from "react";
import s from "./About.module.sass";

//CUSTOM HOOKS
import useTransitionOnScroll from "../hooks/useTransitionOnScroll";

export default function About() {
  const refs = useRef([]);

  useTransitionOnScroll(refs.current, s.fadeIn);

  return (
    <div className={s.container}>
      <article className={s.hero}>
        <main className={s.firstCol} ref={(ref) => refs.current.push(ref)}>
          <h1 className={s.name}>Gabriel Shimabuku</h1>
          <h3 className={s.area}>Web developer</h3>
        </main>
      </article>

      <article className={s.bio}>
        <figure className={s.bio_figure} ref={(ref) => refs.current.push(ref)}>
          <Image
            // priority
            src="/images/profile_photo.png"
            className={s.bio_photo}
            height={300}
            width={300}
            alt="Profile pic"
          />
        </figure>

        <section
          className={s.bio_description}
          ref={(ref) => refs.current.push(ref)}
        >
          <h2 className={s.bio_title}>about me</h2>
          <p className={s.bio_content}>
            I’m a web developer based in Buenos Aires, Argentina. I enjoy
            building apps, solving problems and learning about web development.
            Most of what I’ve learned comes from personal projects and free
            courses. I consider myself a self-taught person who likes
            discovering and experimenting with new technologies.
          </p>
        </section>
      </article>

      <article className={s.stack}>
        <h2 className={s.stack_title} ref={(ref) => refs.current.push(ref)}>
          Tech stack
        </h2>
        <div
          className={s.stack_description}
          ref={(ref) => refs.current.push(ref)}
        >
          <ul className={s.stackList}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Svelte</li>

          </ul>
          <ul className={s.stackList}>
            <li>Python</li>
            <li>Go</li>
            <li>C# (.NET)</li>
            <li>Git/Github</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
