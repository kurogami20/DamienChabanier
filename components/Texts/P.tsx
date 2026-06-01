interface Pprops {
  classContent: string;
  content: string;
}

const P = ({ classContent, content }: Pprops) => {
  return <p className={` ${classContent} text-base md:text-lg `}>{content}</p>;
};

export default P;
