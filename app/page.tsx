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

export default function Home() {
  const setHomeAtom = useSetAtom(HomeAtom);
  setHomeAtom(true);
  const [offer, setOffer] = useState<{
    name: string;
    background: string;
    text: string;
  }>({
    name: "votre vision",
    background: "bg-[#880036]",
    text: "text-background",
  });
  const offers = [
    {
      name: "votre vision",
      background: "bg-[#880036]",
      text: "text-background",
    },
    {
      name: "votre imaginaire",
      background: "bg-[#b10000]",
      text: "text-background",
    },
    {
      name: "votre idée",
      background: "bg-[#e60000]",
      text: "text-background",
    },
    {
      name: "votre rêve",
      background: "bg-[#ff7700]",
      text: "text-foreground",
    },
    {
      name: "votre ambition",
      background: "bg-[#ffcc00]",
      text: "text-foreground",
    },
    {
      name: "votre projet",
      background: "bg-[#ffdf5d]",
      text: "text-foreground",
    },
  ];

  function lineAnimate() {
    const lines = document.querySelectorAll("line");

    lines.forEach((line, index) => {
      line.classList.add("hover:animate-pulse", "cursor-pointer");
    });
  }

  function randomOffer() {
    const randomIndex = Math.floor(Math.random() * offers.length);
    setOffer(offers[randomIndex]);
  }

  return (
    <main className="  flex flex-col w-full h-full">
      <section id="accueil" className="h-dvh w-full relative">
        <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
          <Image src="/logoFolio.svg" alt="Logo" width={200} height={200} />
          <Button variant="main" className="text-xl px-5 py-6">
            Découvrez mon CV
          </Button>
        </article>
        <Image
          src="/hero_image_mobile.svg"
          alt="Hero Image"
          width={200}
          height={60}
          className="h-dvh object-cover max-w-3/4 w-full "
        />
      </section>
      <section className="h-screen "></section>
    </main>
  );
}
