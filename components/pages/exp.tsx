import { useState } from "react";
import ScreenExp from "@/components/screenExp";
import H2 from "@/components/Texts/H2";
import projects from "@/data/dataProjects";
import TextExp from "@/components/textExp";
import { ChevronDown, ChevronUp, Dot } from "lucide-react";
import { useAtomValue } from "jotai";
import { TabAtom } from "@/store/atoms";

const Exp = () => {
  const [projectNo, setProjectNo] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const isTabAtom = useAtomValue(TabAtom);

  const handleProjectChange = (newIndex: number) => {
    if (newIndex === projectNo || isFading) return;
    setIsFading(true);
    window.setTimeout(() => {
      setProjectNo(newIndex);
      setIsFading(false);
    }, 300);
  };

  return (
    <section
      id="projects"
      className=" w-full h-fit p-6 md:px-15 md:py-15 2xl:px-25  bg-background  flex flex-col justify-between  relative"
    >
      <H2
        classContent="text-(--main-color) text-center  xl:text-left capitalise md:mb-20 xl:mb-15 2xl:mb-25 w-full text-wrap"
        content="Mes Projets"
      />
      <div className="h-full hidden md:absolute bg-(--main-color) z-0 w-[12%] top-0 left-0" />

      <section className="w-full h-full flex-col xl:flex-row flex md:justify-between gap-10 md:gap-20 items-center mt-15 md:mt-0">
        <section
          className={`w-fit h-fit md:h-full justify-center transition-opacity duration-200 ease-in-out  ${
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
          className={
            "w-full md:h-full border-t-5 xl:border-l-5 xl:border-t-0 border-[#2b8827] pt-3 xl:pt-0 md:pl-5 xl:overflow-auto relative xl:block!"
          }
        >
          {projects.map(
            (project, index) =>
              index === projectNo && (
                <TextExp
                  // @ts-ignore will redo later
                  className={` ${isFading ? "opacity-0" : "opacity-100"} transition-opacity duration-200 ease-in-out `}
                  key={project.titre}
                  title={project.titre}
                  description={project.description}
                  content={project.stack}
                  url={project.link}
                />
              ),
          )}{" "}
        </article>
        <div className="w-fit flex flex-col gap-4 items-center absolute -bottom-17 xl:right-6  2xl:right-15  xl:top-1/2 xl:-translate-y-1/2  xl:z-10  -rotate-90 xl:rotate-0">
          <ChevronUp
            className=" text-(--main-color) cursor-pointer hover:border-2 hover:border-(--main-color) rounded-full w-8 h-8"
            size={50}
            onClick={() => {
              handleProjectChange(Math.max(0, projectNo - 1));
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          {projects.map((project, index) => (
            <Dot
              key={project.titre}
              size={index === projectNo ? 40 : 16}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
                handleProjectChange(index);
              }}
              className=" text-(--main-color) cursor-pointer p-0 hover:border-2 hover:border-(--main-color) rounded-full"
            />
          ))}

          <ChevronDown
            className=" text-(--main-color) cursor-pointer hover:border-2 hover:border-(--main-color) rounded-full w-8 h-8"
            size={50}
            onClick={() => {
              handleProjectChange(Math.min(projects.length - 1, projectNo + 1));
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default Exp;
