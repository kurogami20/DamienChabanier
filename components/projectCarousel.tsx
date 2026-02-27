import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const ProjectCarousel = () => {
  return (
    <Carousel className="w-full  sm:max-w-full h-full">
      <CarouselContent className="h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full">
              <Card className="bg-transparent m-5 text-center h-[90%]">
                hello
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-100 left-1 bottom-0 cursor-pointer" />
      <CarouselNext className="absolute right-1 top-100 bottom-0 cursor-pointer" />
    </Carousel>
  );
};

export default ProjectCarousel;
