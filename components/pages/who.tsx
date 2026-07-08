import { DownloadIcon, Section } from "lucide-react";
import H2 from "@/components/Texts/H2";
import P from "@/components/Texts/P";
import { Button } from "@/components/ui/button";

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
    <section
      id="who"
      className="bg-background w-full h-dvh md:h-screen flex flex-col xl:justify-center xl:pt-10  2xl:pt-15 "
    >
      <section className="flex h-2.5/7 md:h-4/7  xl:h-3/7   justify-between xl:gap-8 w-full align-middle items-center p-6 md:px-15 2xl:px-25 relative ">
        <article className="flex flex-col gap-4 xl:w-3/4 py-2 justify-center ">
          <H2 classContent="text-(--main-color)  capitalize" content="Hey !" />
          <P
            classContent=" border-b-5 border-(--main-color)  pb-5 "
            content="Je m’appelle Damien. Je suis développeur web full-stack. J’adore concevoir et créer des applications. Je code principalement en JavaScript et en TypeScript, mais je peux aussi utiliser d’autres langages de programmation. J’apprécie particulièrement les défis et l’aspect résolution de problèmes dans un projet de développement.
Dans la vie, j’aime beaucoup le dessin et l’animation. J’aime aussi cuisiner et les jeux vidéo."
          />
        </article>
        <img
          src="/mi.png"
          alt=""
          className=" hidden xl:block max-w-full object-cover xl:h-110.25 xl:w-50.56   z-2"
        />
        <img
          src="/line_14.png"
          alt=""
          className=" hidden xl:absolute! bottom-0 right-0 max-w-full z-1"
        />
      </section>
      <section className="z-3 flex flex-col xl:flex-row h-5/7 xl:h-4/7 bg-(--main-color)  gap-8 w-full items-center p-6 md:px-20 xl:px-15 2xl:px-25 justify-between selection:bg-(--sec-color) selection:text-(--main-color)!">
        <div className="flex flex-col gap-4 md:gap-2 xl:gap-4   justify-center items-center ">
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
          className="max-w-full object-cover  h-40 w-73.32 xl:h-50 2xl:h-55 xl:w-109.99 "
        />
        <div className="flex flex-col gap-4 xl:py-10  justify-center items-center  xl:w-2/7 self-center">
          <ul className="flex  justify-center flex-wrap xl:justify-start gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className=" text-(--sec-color) px-2 py-1  md:px-4 md:py-2 border border-(--sec-color) rounded-full text-sm md:text-base 2xl:text-lg"
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
