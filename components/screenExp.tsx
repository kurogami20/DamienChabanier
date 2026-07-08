import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ScreenExpProps {
  rotate?: string;
  url?: string;
  image?: string;
}

const ScreenExp = ({ rotate, url, image }: ScreenExpProps) => {
  return (
    <Card
      className={`border-5 p-0 gap-0 m-0 border-(--main-color) w-70 h-100   md:w-140 md:h-150 xl:w-170 2xl:w-200 min-[1650px]:w-250!  rounded-[33px] drop-shadow-[20px_20px_0px_rgba(115,20,20,0.47)]  xl:drop-shadow-[40px_40px_0px_rgba(115,20,20,0.47)] ${rotate} group relative `}
      onScroll={() => console.log("scroll")}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button
          variant="main"
          className=" bg-(--main-color) text-lg text-white z-15 border-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Voir le projet
        </Button>
      </a>

      <img
        src={image || "aile.png"}
        alt="exp"
        className="max-w-full w-250 h-150! object-cover group-hover:blur-sm transition-all duration-300 overflow-hidden rounded-[29px]"
      />
    </Card>
  );
};

export default ScreenExp;
