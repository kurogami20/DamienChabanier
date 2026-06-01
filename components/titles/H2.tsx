import { myTitleFont } from "../../app/font";

interface H2Props {
  classContent: string;
  content: string;
}

const H2 = ({ classContent, content }: H2Props) => {
  return (
    <h2
      className={` ${classContent}  uppercase text-4xl md:text-6xl lg:text-7xl ${myTitleFont.className}`}
    >
      {content}
    </h2>
  );
};

export default H2;
