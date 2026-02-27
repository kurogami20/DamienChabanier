"use client";

import ProjectCarousel from "@/components/projectCarousel";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import projects from "@/data/dataProjects";

const Projects = () => {
  return (
    <div id="projets" className="mx-[8%] my-[5%] h-[80%]">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full h-full"
      >
        <CarouselContent className="-mt-1 h-full!">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className=" pt-1 h-full">
              <div className="p-1 h-full">
                <Card className="bg-transparent h-full">
                  <article className="relative h-full">
                    <ProjectCarousel />
                  </article>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="right-0 left-100" />
        <CarouselNext className="right-0 left-100" />
      </Carousel>
    </div>
  );
};

export default Projects;
