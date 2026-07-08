import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import H2 from "../Texts/H2";

const Hero = () => {
  return (
    <section className="bg-(--main-color) w-screen h-dvh md:h-screen  flex relative selection:bg-(--sec-color) selection:text-(--main-color)! align-center overflow-hidden gap-15">
      <section className=" flex justify-center w-full xl:w-3/5 relative items-center">
        <img
          src="/Line_4.svg"
          alt="logo"
          className="hidden xl:block max-w-full"
        />
        <H2
          classContent="text-(--sec-color) uppercase flex md:items-center text-center xl:text-left text-[4rem] md:text-[5rem]! xl:text-[7rem]! 2xl:text-[9rem]! 3xl:text-[11rem]! drop-shadow-[10px_5px_0px_rgba(112,211,76,0.2)]"
          content="Damien Chabanier"
        />
      </section>
      <section className="lg:flex  justify-center xl:w-2/5 2xl:w-3/5 hidden ">
        <img
          src="/logoFolio.svg"
          alt="logo"
          className="flex md:items-center max-w-full md:w-5/7"
        />
      </section>
      <div className="absolute right-0 bottom-0  flex gap-4 p-4 mr-5 mb-5">
        {" "}
        <FontAwesomeIcon
          className="text-(--sec-color) w-10! h-10! xl:size-17! cursor-pointer"
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="text-(--sec-color) w-10! h-10! xl:size-17! cursor-pointer"
          icon={faSquareLinkedin}
        />
      </div>
    </section>
  );
};

export default Hero;
