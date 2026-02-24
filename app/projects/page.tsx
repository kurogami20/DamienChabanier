"use client";

import { useSetAtom } from "jotai";
import { HomeAtom } from "@/utils/atoms";
import { useEffect } from "react";

const Projects = () => {
  const setHomeAtom = useSetAtom(HomeAtom);

  useEffect(() => {
    return () => {
      setHomeAtom(false);
    };
  }, []);

  return <div>proj</div>;
};

export default Projects;
