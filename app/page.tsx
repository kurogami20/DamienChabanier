"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSetAtom } from "jotai";
import { HomeAtom } from "@/utils/atoms";

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

  function randomOffer() {
    const randomIndex = Math.floor(Math.random() * offers.length);
    setOffer(offers[randomIndex]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      randomOffer();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between ">
      {/* <Image
        src="/hero_image.svg"
        alt="Hero Image"
        width={200}
        height={60}
        className="h-dvh object-cover max-w-1/2 w-full object-top"
      /> */}
      <svg
        width="900"
        height="1080"
        viewBox="0 0 892 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Decorative gradient lines background</title>
        <line
          y1="-51"
          x2="2059.02"
          y2="-51"
          transform="matrix(-4.37114e-08 -1 0.999986 0.00532905 319 1738)"
          stroke="#E60000"
          stroke-width="102"
          className="hover:animate-pulse  hover:stroke-120 transition-all duration-300 cursor-[url('/hero_image.svg'),pointer] "
        />
        <line
          y1="-51"
          x2="2059.02"
          y2="-51"
          transform="matrix(-4.37114e-08 -1 0.999986 0.00532905 207 1716)"
          stroke="#B10000"
          stroke-width="102"
          className="hover:animate-pulse cursor-pointer hover:stroke-120 transition-all duration-300"
        />
        <line
          y1="-51"
          x2="2059.02"
          y2="-51"
          transform="matrix(-4.37114e-08 -1 0.999986 0.00532905 431 1723)"
          stroke="#FF7700"
          stroke-width="102"
          className="hover:animate-pulse cursor-pointer hover:stroke-120 transition-all duration-300"
        />
        <line
          y1="-51"
          x2="2059.02"
          y2="-51"
          transform="matrix(-4.37114e-08 -1 0.999986 0.00532905 542 1709.02)"
          stroke="#FFCC00"
          stroke-width="102"
          className="hover:animate-pulse cursor-pointer hover:stroke-120 transition-all duration-300"
        />
        <path
          d="M589.247 1722.12C1221.71 919.2 445.122 85.8242 589.247 -336.903"
          stroke="#FFDF5D"
          stroke-width="102"
          className="hover:animate-pulse cursor-pointer hover:stroke-120 transition-all duration-300"
        />
        <line
          y1="-51"
          x2="2059.02"
          y2="-51"
          transform="matrix(-4.37114e-08 -1 0.999986 0.00532905 95.3248 1745)"
          stroke="#880036"
          stroke-width="102"
          className="hover:animate-pulse cursor-pointer hover:stroke-120 transition-all duration-300  "
        />
      </svg>
      <article className="w-1/2 flex flex-col items-center h-full justify-center gap-40 mt-[10vh]">
        <Image src="/logoFolio.svg" alt="Logo" width={560} height={267} />

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
    </div>
  );
}
