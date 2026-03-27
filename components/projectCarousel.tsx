import dataProject from "../data/dataProjects";
import Image from "next/image";
const ProjectCarousel = () => {
  const content = dataProject[0].projet[0].content[0];
  const imageUrl = "image" in content ? content.image : "";

  return (
    <>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={dataProject[0].titre}
          width={500}
          height={500}
        />
      )}
    </>
  );
};

export default ProjectCarousel;
