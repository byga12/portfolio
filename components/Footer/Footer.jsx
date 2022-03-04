import s from "./Footer.module.sass";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div>
        <a href="./">
          <Image
            src="/images/websiteIcon.svg"
            alt="Website icon"
            width={30}
            height={30}
          />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/gabriel-shimabuku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedinIcon.svg"
            alt="LinkedIn icon"
            width={30}
            height={30}
          />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/byga12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/githubIcon.svg"
            alt="GitHub icon"
            width={30}
            height={30}
          />
        </a>
      </div>
    </footer>
  );
}
