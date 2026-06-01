import H2 from "./Texts/H2";

const Hero = () => {
  return (
    <section className="bg-(--main-color) w-screen h-screen flex ">
      <section className="flex   gap-8 w-3/5">
        <img src="/Line_4.svg" alt="logo" className=" max-w-full" />
        <H2
          classContent="text-(--sec-color) uppercase flex md:items-center "
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
    </section>
  );
};

export default Hero;
