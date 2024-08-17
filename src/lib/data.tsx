import { Github, Instagram, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import ProjectRentTu from "/public/images/project-rent-tu.png";
import ProjectTwoJobs from "/public/images/project-twojobs.png";
import ProjectInstagram from "/public/images/project-instagram-clone.png";
import ProjectLanding from "/public/images/project-landing.png";

import { ProjectDetails, TechDetails } from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/valonhaxhidauti",
  GITHUB_REPO: "https://github.com/valonhaxhidauti/V_Portfolio",
  LINKEDIN: "https://www.linkedin.com/in/valon-haxhidauti-5100b9156",
  INSTAGRAM: "https://www.instagram.com/valonhaxhidauti/",
};

export const NAV_LINKS = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    tooltip: "Github profile",
    url: "https://github.com/valonhaxhidauti",
  },
  {
    icon: Instagram,
    tooltip: "Instagram profile",
    url: "https://www.instagram.com/valonhaxhidauti/",
  },
  {
    icon: Linkedin,
    tooltip: "Linkedin profile",
    url: "https://www.linkedin.com/in/valon-haxhidauti-5100b9156",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Rent TU!",
    description:
      "A car renting website that i built using next.js for front end for a swiss company, the back end was built with laravel.",
    url: "https://rent-tu.netlify.app/en",
    githubUrl: "https://github.com/valonhaxhidauti/car-renting-app",
    previewImage: ProjectRentTu,
    technologies: ["Next.js", "Laravel", "Tailwind"],
  },
  {
    name: "Two Jobs",
    description:
      "A website for applying to jobs posted by different companies.",
    url: "https://two-jobs-app.netlify.app/",
    githubUrl: "https://github.com/valonhaxhidauti/responsible_job_site",
    previewImage: ProjectTwoJobs,
    technologies: ["Next.js", "Typescript", "SCSS/SASS"],
  },
  {
    name: "Instagram clone",
    description:
      "A social network similiar to Instagram made using rapidapi endpoints.",
    url: "https://insta-valon.netlify.app",
    githubUrl: "https://github.com/valonhaxhidauti/social-network",
    previewImage: ProjectInstagram,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Blog page",
    description:
      "A multi-function website with multiple pages made using figma.",
    url: "https://valon-brand.netlify.app/",
    githubUrl: "https://valon-brand.netlify.app/",
    previewImage: ProjectLanding,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];
