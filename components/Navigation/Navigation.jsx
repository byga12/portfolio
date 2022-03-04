import React from "react";
import s from "./Navigation.module.sass";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const { route } = useRouter();

  return (
    <nav className={s.nav}>
      <ul className={s.links}>
        <li>
          <Link href="/">
            <a className={`${s.link} ${route === "/" ? s.active : ""}`}>
              About me
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className={`${s.link} ${route === "/projects" ? s.active : ""}`}>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={`${s.link} ${route === "/contact" ? s.active : ""}`}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
