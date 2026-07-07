import { useState } from "react";
import ScreenExp from "./screenExp";
import H2 from "./Texts/H2";
import projects from "@/data/dataProjects";
import TextExp from "./textExp";
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
    <section className=" w-full h-fit p-6 md:px-15 md:py-15 lg:px-40 bg-background  flex flex-col justify-between  relative">
      <H2
        classContent="text-(--main-color) text-center  lg:text-left capitalise md:mb-25 w-full text-wrap"
        content="Mes Projets"
      />
      <div className="h-full hidden md:absolute bg-(--main-color) z-0 w-[12%] top-0 left-0" />

      <section className="w-full h-full flex-col lg:flex-row flex md:justify-between gap-10 md:gap-20 items-center mt-15 md:mt-0">
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
            "w-full md:h-full border-t-5 lg:border-l-5 lg:border-t-0 border-[#2b8827] pt-3 lg:pt-0 md:pl-5 lg:overflow-auto "
          }
        >
          {projects.map(
            (project, index) =>
              index === projectNo && (
                <TextExp
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
        <div className="w-fit flex flex-col gap-4 items-center lg:absolute top-full   lg:right-15  lg:top-1/2 lg:-translate-y-1/2  lg:z-10  -rotate-90 lg:rotate-0">
          <ChevronUp
            className=" text-(--main-color) cursor-pointer hover:border-2 hover:border-(--main-color) rounded-full w-8 h-8"
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
            className=" text-(--main-color) cursor-pointer hover:border-2 hover:border-(--main-color) rounded-full w-8 h-8"
            size={50}
            onClick={() =>
              handleProjectChange(Math.min(projects.length - 1, projectNo + 1))
            }
          />
        </div>
      </section>
    </section>
  );
};

export default Exp;
