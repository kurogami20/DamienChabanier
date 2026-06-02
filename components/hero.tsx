import { GithubIcon, LinkedinIcon } from "lucide-react";
import H2 from "./Texts/H2";

const Hero = () => {
  return (
    <section className="bg-(--main-color) w-screen h-screen flex relative">
      <section className="flex    w-3/5 relative">
        {/* <span
          className="absolute inset-0 flex items-center
               text-sm font-medium tracking-widest text-black/10
             
               select-none pointer-events-none whitespace-pre-wrap"
        >
          DRAFT DRAFT DRAFT DRAFT DRAFT ...
        </span> */}

        <img src="/Line_4.svg" alt="logo" className=" max-w-full" />
        <H2
          classContent="text-(--sec-color) uppercase flex md:items-center md:text-[11rem]! drop-shadow-[10px_5px_0px_rgba(112,211,76,0.2)]"
          content="Damien Chabanier"
        />
      </section>
      <section className="flex  justify-center w-2/5">
        <img
          src="/logoFolio.svg"
          alt="logo"
          className="flex md:items-center max-w-full md:w-5/7"
        />
      </section>
      <div className="absolute right-0 bottom-0  flex gap-4 p-4 mr-5 mb-5">
        <LinkedinIcon className="size-10 text-(--sec-color) cursor-pointer" />
        <GithubIcon className="size-10 text-(--sec-color) cursor-pointer" />
      </div>
    </section>
  );
};

export default Hero;
