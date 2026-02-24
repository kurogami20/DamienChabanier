"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [offer, setOffer] = useState<string>("votre projet");
  const offers = [
    {
      name: "votre vision",
    },
    {
      name: "votre imaginaire",
    },
    {
      name: "votre idée",
    },

    {
      name: "votre projet",
    },
  ];

  function randomOffer() {
    const randomIndex = Math.floor(Math.random() * offers.length);
    setOffer(offers[randomIndex].name);
  }

  useEffect(() => {
    const interval = setInterval(randomOffer, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between ">
      <Image
        src="/hero_image.svg"
        alt="Hero Image"
        width={200}
        height={60}
        className="h-dvh object-cover w-1/2 max-w-full object-top"
      />
      <article className="w-1/2 flex flex-col items-center h-full justify-center gap-40 mt-[10vh]">
        <Image src="/logoFolio.svg" alt="Logo" width={560} height={267} />
        <h1 className="text-5xl font-light">
          Je développe{" "}
          <span className="bg-[#880036] text-background px-2 py-2 rounded-lg">
            {offer}
          </span>
        </h1>
      </article>
    </div>
  );
}
