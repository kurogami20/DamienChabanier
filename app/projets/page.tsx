"use client";

import { useSetAtom } from "jotai";
import { HomeAtom } from "@/store/atoms";

const Projects = () => {
  const setHomeAtom = useSetAtom(HomeAtom);
  setHomeAtom(false);

  return (
    <main className="w-full h-full">
      <div className="mx-[20%] mt-[1%]">prjets</div>
    </main>
  );
};

export default Projects;
