import ScreenExp from "./screenExp";
import H2 from "./Texts/H2";
import projects from "@/data/dataProjects";

const Exp = () => {
  return (
    <section className=" w-full h-screen px-40 bg-background  md:py-15">
      <H2
        classContent="text-(--main-color) capitalise "
        content="Projets/Expérience"
      />

      <section className="w-full h-full flex items-center justify-center flex-col">
        {projects.map((project, index) => (
          <ScreenExp
            key={project.titre}
            url={project.projet[0].content.link}
            rotate={project.rotate}
            image={project.projet[0].content.image}
          />
        ))}
      </section>
    </section>
  );
};

export default Exp;
