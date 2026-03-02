import dataProject from "../data/dataProjects";
import Image from "next/image";
const ProjectCarousel = () => {
  return (
    <>
      <Image
        src={dataProject[0].projet[0].content[0].image}
        alt={dataProject[0].titre}
        width={500}
        height={500}
      />
    </>
  );
};

export default ProjectCarousel;
