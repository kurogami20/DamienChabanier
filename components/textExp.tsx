import { myTitleFont } from "@/app/font";
import P from "./Texts/P";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { TabAtom } from "@/store/atoms";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

interface TextExpProps {
  title: string;
  description: string;

  content: {
    name: string;
    techno: string[];
  }[];
  url: string;
}

const TextExp = ({ title, description, content, url }: TextExpProps) => {
  const isTabAtom = useAtomValue(TabAtom);
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
  return isTabAtom ? (
    <Card className="flex flex-col gap-4 md:gap-6 bg-transparent border-none shadow-none">
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-4 md:gap-6 bg-transparent border-none shadow-none"
      >
        <AccordionItem value="item-1" className="text-(--main-color)">
          <CardHeader>
            <AccordionTrigger className="hover:cursor-pointer ">
              <CardTitle className=" mb-2 md:mb-4">
                <h1
                  className={`text-3xl md:text-4xl ${myTitleFont.className} text-(--main-color)! font-normal`}
                >
                  {title}
                </h1>
              </CardTitle>
            </AccordionTrigger>
            <AccordionContent>
              <CardDescription>
                <p className=" md:text-base text-gray-900 text-sm ">
                  {description}
                </p>
              </CardDescription>
            </AccordionContent>
          </CardHeader>

          <AccordionContent className="flex flex-col gap-4 md:gap-6 bg-transparent border-none shadow-none">
            <CardContent>
              {/* <h2 className="text-2xl font-bold">Stack:</h2> */}
              <section className="flex flex-wrap  gap-4 justify-between mt-4">
                {content.map((item) => (
                  <div key={item.name}>
                    <h2 className="text-xl font-semibold capitalize">
                      {item.name}
                    </h2>
                    <ul className="list-disc list-inside">
                      {item.techno.map((tech, index) => (
                        <li className="capitalize" key={`tech-${index}`}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </CardContent>
            <CardFooter className="self-end">
              <Button variant="main">
                <a
                  href={url}
                  target="_blank"
                  className="text-base"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              </Button>
            </CardFooter>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  ) : (
    <Card className="flex flex-col gap-4 md:gap-6 bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className=" mb-2 md:mb-4">
          <h1
            className={`text-3xl md:text-4xl ${myTitleFont.className} text-(--main-color)! font-normal`}
          >
            {title}
          </h1>
        </CardTitle>
        <CardDescription>
          <p className=" md:text-base text-gray-900 text-sm ">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <h2 className="text-2xl font-bold">Stack:</h2> */}
        <section className="flex flex-wrap  gap-4 justify-between mt-4 text-(--main-color)">
          {content.map((item) => (
            <div key={item.name}>
              <h2 className="text-xl font-semibold capitalize">{item.name}</h2>
              <ul className="list-disc list-inside">
                {item.techno.map((tech, index) => (
                  <li className="capitalize" key={`tech-${index}`}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </CardContent>
      <CardFooter className="self-end">
        <Button variant="main">
          <a
            href={url}
            target="_blank"
            className="text-base"
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TextExp;
