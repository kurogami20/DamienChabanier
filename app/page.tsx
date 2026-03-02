"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { HomeAtom } from "@/store/atoms";
import Projects from "./projets/page";
import Competences from "./competences/page";

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

  useEffect(() => {
    lineAnimate();
    const interval = setInterval(() => {
      randomOffer();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="  flex flex-col w-full h-full">
      <section id="accueil" className="flex justify-between h-dvh">
        <Image
          src="/hero_image.svg"
          alt="Hero Image"
          width={200}
          height={60}
          className="h-dvh object-cover max-w-1/2 w-full object-top"
        />

        <article className="w-1/2 flex flex-col items-center h-full justify-center gap-40 ">
          <Image src="/logoFolio.svg" alt="Logo" width={500} height={267} />

          <h1 className="text-5xl font-light ">
            Je développe{" "}
            <span
              className={`${offer.background} ${offer.text} px-2 py-2 rounded-lg animateText transition-all duration-500`}
            >
              {offer.name}
            </span>
          </h1>
          <div className="absolute bottom-5 right-10">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "rgb(0, 0, 0)" }}
              className="text-4xl cursor-pointer "
              type="button"
            />
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              style={{ color: "rgb(0, 0, 0)" }}
              className="text-4xl ml-4 cursor-pointer"
              type="button"
            />
          </div>
        </article>
      </section>
      <section className="h-screen ">
        <Projects />
      </section>
      <section className="h-screen bg-[#b10000]">
        <Competences />
      </section>

      <section className="h-screen bg-[#b10000]"></section>
      <section className="h-screen bg-[#e60000]"></section>
    </main>
  );
}
