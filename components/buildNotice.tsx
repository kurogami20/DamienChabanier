import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

const BuildNotice = () => {
  return (
    <>
      <Card className="mx-auto w-full  max-w-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 bg-background ">
        <CardHeader className="flex flex-col items-center">
          <Image src="/logoFolio.svg" alt="Logo" width={150} height={100} />
          <CardTitle className="text-2xl text-center">
            Site en construction
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full ">
          <p>Le site est en cours de construction.</p>
          <p className="mb-4">
            En attente de mise à jour, vous pouvez consulter mes derniers
            projets:
          </p>
          <ol className="list-decimal list-outside pl-4 flex flex-col gap-4">
            <li>
              {" "}
              <Link
                className="underline text-[#880036] hover:text-[#880036]/80"
                href="http://dam31270.free.fr/index.php"
              >
                Refonte du site de l'Association AILE
              </Link>
            </li>
            <li>
              Projet GreenRoots
              <ul className="list-inside list-disc ">
                <li>
                  {" "}
                  <Link
                    className="underline text-[#880036] hover:text-[#880036]/80"
                    href="https://greenroots2025.surge.sh"
                  >
                    Site GreenRoots
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#880036] hover:text-[#880036]/80"
                    href="https://www.figma.com/design/g2EoR8EwZglLKxc09Q0Gy2/GreenRoots?node-id=0-1&t=NrwWJ2I0ZD6KBV59-1"
                  >
                    Maquette de GreenRoots
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              Refonte du site de la Maison de la Nature et de l'Environnement 65
              <ul className="list-inside list-disc ">
                <li>
                  {" "}
                  <Link
                    className="underline text-[#880036] hover:text-[#880036]/80"
                    href="https://maisondelanature65.com"
                  >
                    Site de la Maison de la Nature et de l'Environnement 65
                  </Link>
                </li>
                <li>
                  <Link
                    className="underline text-[#880036] hover:text-[#880036]/80"
                    href="https://www.figma.com/design/zpPQK7W1Dqc5zrS8GBh8QG/mne65?node-id=19-399&t=eKGCuLE3URAb7wfa-1"
                  >
                    Maquette de la Maison de la Nature et de l'Environnement 65
                  </Link>
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-4">
            Plus de projets à retrouver sur mon{" "}
            <Link
              className="underline text-[#880036] hover:text-[#880036]/80"
              href="https://github.com/kurogami20"
            >
              compte
            </Link>{" "}
            GitHub
          </p>
        </CardContent>
        <CardFooter className="flex flex-col w-full  gap-4">
          <p>Retrouvez moi sur:</p>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#880036" }}
              className="text-4xl cursor-pointer "
              type="link"
              onClick={() => window.open("https://github.com/kurogami20")}
            />
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              style={{ color: "#880036" }}
              className="text-4xl ml-4 cursor-pointer"
              type="link"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/damien-chabanier-822190244/",
                )
              }
            />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
export default BuildNotice;
