import { useState } from "react";
import ScreenExp from "./screenExp";
import H2 from "./Texts/H2";
import projects from "@/data/dataProjects";
import TextExp from "./textExp";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";

const Exp = () => {
  const [projectNo, setProjectNo] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleProjectChange = (newIndex: number) => {
    if (newIndex === projectNo || isFading) return;
    setIsFading(true);
    window.setTimeout(() => {
      setProjectNo(newIndex);
      setIsFading(false);
    }, 300);
  };

  return (
    <section className=" w-full h-screen px-40 bg-background  md:py-15 flex flex-col justify-between overflow-hidden relative">
      <H2
        classContent="text-(--main-color) md:ml-[13%] capitalise md:mb-25"
        content="Projets/Expériences"
      />
      <div className="h-full md:absolute bg-(--main-color) z-0 w-[12%] top-0 left-0" />
      <div className="absolute md:right-10 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-4 z-10 items-center">
        <ChevronUp
          className=" text-(--main-color) cursor-pointer hover:border-2 hover:border-(--main-color) rounded-full"
          size={50}
          onClick={() => handleProjectChange(Math.max(0, projectNo - 1))}
        />
        {projects.map((project, index) => (
          <Dot
            key={project.titre}
            size={index === projectNo ? 40 : 16}
            onClick={() => handleProjectChange(index)}
            className=" text-(--main-color) cursor-pointer p-0 hover:border-2 hover:border-(--main-color) rounded-full"
          />
        ))}

        <ChevronDown
          className=" text-(--main-color) cursor-pointer hover:border-2 hover:border-(--main-color) rounded-full"
          size={50}
          onClick={() =>
            handleProjectChange(Math.min(projects.length - 1, projectNo + 1))
          }
        />
      </div>
      <section className="w-full h-full flex justify-between gap-20">
        <section
          className={`w-fit h-full justify-center transition-opacity duration-200 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {projects.map(
            (project, index) =>
              index === projectNo && (
                <ScreenExp
                  key={project.titre}
                  url={project.link}
                  rotate={project.rotate}
                  image={project.image}
                />
              ),
          )}
        </section>
        <article
          className={`w-full h-full border-l-5 border-[#2b8827] pl-5 transition-opacity duration-200 ease-in-out ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {projects.map(
            (project, index) =>
              index === projectNo && (
                <TextExp
                  key={project.titre}
                  title={project.titre}
                  description={project.description}
                  content={project.stack}
                  url={project.link}
                />
              ),
          )}
        </article>
      </section>
    </section>
  );
};

export default Exp;
