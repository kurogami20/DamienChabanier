import { DownloadIcon, Section } from "lucide-react";
import H2 from "./Texts/H2";
import P from "./Texts/P";
import { Button } from "./ui/button";

const Who = () => {
  const skills = [
    "Architecture",
    "Conception",
    "Maintenance",
    "Tests",
    "Optimisation",
    "Collaboration",
    "Veille technologique",
    "Agile",
    "Modelisation",
    "CI/CD",
  ];

  return (
    <section className="bg-background w-full h-dvh md:h-screen flex flex-col lg:justify-center  lg:pt-15 ">
      <section className="flex h-2.5/7 md:h-3/7 lg:h-4/7   justify-between gap-8 w-full align-middle items-center p-6 md:px-20 lg:px-40 relativecd ">
        <article className="flex flex-col gap-4 lg:w-2/5 py-2 justify-center">
          <H2 classContent="text-(--main-color)  capitalize" content="Hey !" />
          <P
            classContent=" border-b-5 border-(--main-color)  pb-5 "
            content="Je m’appelle Damien. Je suis développeur web full-stack. J’adore concevoir et créer des applications. Je code principalement en JavaScript et en TypeScript, mais je peux aussi utiliser d’autres langages de programmation. J’apprécie particulièrement les défis et l’aspect résolution de problèmes dans un projet de développement.
Dans la vie, j’aime beaucoup le dessin et l’animation. J’aime aussi cuisiner et les jeux vidéo."
          />
        </article>
        <img
          src="/mi.png"
          alt="logo"
          className=" hidden lg:block max-w-full object-cover h-139 w-100.75 z-2"
        />
        <img
          src="/line_14.png"
          alt=""
          className=" hidden lg:absolute! bottom-0 right-0 max-w-full z-1"
        />
      </section>
      <section className="flex flex-col lg:flex-row h-5/7 lg:h-3/7 bg-(--main-color)  gap-8 w-full items-center p-6 md:px-20 lg:px-40 justify-between selection:bg-(--sec-color) selection:text-(--main-color)!">
        <div className="flex flex-col gap-4 md:gap-2 lg:gap-4   justify-center items-center">
          <H2
            classContent="text-(--sec-color)  capitalize"
            content="Compétences"
          />
          <Button
            variant="main"
            className="text-(--sec-color) text-base md:text-lg "
          >
            <DownloadIcon className="" /> CV
          </Button>
        </div>

        <img
          src="/tool.svg"
          alt=" It is a svg with a lot of icons representing different programming languages, frameworks, and tools that I am proficient in. The icons are arranged in a grid pattern, with each icon representing a different technology. The icons include popular programming languages such as JavaScript, TypeScript, Python, and Java, as well as frameworks like React, Angular, and Vue.js. There are also icons for tools like Git, Docker, and Visual Studio Code. The overall design of the svg is colorful and visually appealing, showcasing my diverse skill set in web development."
          className="max-w-full object-cover  h-40 w-73.32 md:h-50 lg:h-60 lg:w-109.99"
        />
        <div className="flex flex-col gap-4   justify-center items-center lg:w-2/7">
          <ul className="flex  justify-center flex-wrap lg:justify-start gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className=" text-(--sec-color) px-2 py-1  md:px-4 md:py-2 border border-(--sec-color) rounded-full text-sm md:text-base lg:text-lg"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Who;
