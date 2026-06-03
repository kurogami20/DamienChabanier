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

interface TextExpProps {
  title: string;
  description: string;

  content: {
    name: string;
    techno: { name: string }[];
  }[];
  url: string;
}

const TextExp = ({
  title,
  description,

  content,
  url,
}: TextExpProps) => {
  return (
    <Card className="flex flex-col gap-6 bg-transparent border-none shadow-none">
      <CardHeader>
        <CardTitle className="mb-4">
          <h1
            className={`text-3xl md:text-4xl ${myTitleFont.className} text-(--main-color)! font-normal`}
          >
            {title}
          </h1>
        </CardTitle>
        <CardDescription>
          <p className="text-base md:text-base">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <h2 className="text-2xl font-bold">Stack:</h2> */}
        <section className="flex flex-wrap  gap-4 justify-between mt-4">
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
