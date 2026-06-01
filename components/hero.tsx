const Hero = () => {
  return (
    <section className="bg-(--main-color) w-screen h-screen flex ">
      <section>
        {" "}
        <h2 className={`text-(--sec-color)`}>Damien Chabanier</h2>
      </section>
      <section>
        <img src="/logoFolio.svg" alt="logo" className="" />
      </section>
    </section>
  );
};

export default Hero;
