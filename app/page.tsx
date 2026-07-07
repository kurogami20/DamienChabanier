"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { HomeAtom, TabAtom } from "@/store/atoms";
import Projects from "./projets/page";
import Competences from "./expertises/page";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Who from "@/components/who";
import Exp from "@/components/exp";
import Contact from "@/components/pages/contact";

export default function Home() {
  const setIsTab = useSetAtom(TabAtom);
  const updateIsTab = () => {
    if (window.innerWidth > 1024) {
      setIsTab(false);
    } else {
      setIsTab(true);
    }
  };
  useEffect(() => {
    updateIsTab();
  }, []);
  const test = process.env.REACT_APP_TEST;
  console.log(test);
  return (
    <main className="overflow-x-hidden  ">
      <Hero />
      <Who />
      <Exp />
      <Contact />
    </main>
  );
}
