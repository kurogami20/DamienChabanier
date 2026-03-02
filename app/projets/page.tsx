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
    <div id="projets" className="">
      <ProjectCarousel />
    </div>
  );
};

export default Projects;
