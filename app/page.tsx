"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { TabAtom } from "@/store/atoms";
import Hero from "@/components/pages/hero";
import Who from "@/components/pages/who";
import Exp from "@/components/pages/exp";
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
