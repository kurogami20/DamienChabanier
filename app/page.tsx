"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { HomeAtom } from "@/store/atoms";
import Projects from "./projets/page";
import Competences from "./expertises/page";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Who from "@/components/who";
import Exp from "@/components/exp";

export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <Hero />
      <Who />
      <Exp />
    </main>
  );
}
