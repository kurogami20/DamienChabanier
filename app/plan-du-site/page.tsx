import H2 from "@/components/Texts/H2";
import React from "react";

const Page = () => {
  return (
    <section className="min-h-dvh text-center py-15">
      <H2 classContent={""} content={"Plan du site"} />
      <article className="prose max-w-3xl text-left mx-auto mt-6 flex flex-col gap-4 px-6 md:px-15 2xl:px-25">
        <ul className="flex flex-col gap-4 mt-10 bullet-disc list-inside ">
          <li>
            <a
              href="/"
              className="text-(--main-color) font-bold hover:underline"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/#who"
              className="text-(--main-color) font-bold hover:underline"
            >
              Hey !
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="text-(--main-color) font-bold hover:underline"
            >
              Mes Projets
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-(--main-color) font-bold hover:underline"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/mentions-legales"
              className="text-(--main-color) font-bold hover:underline"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="/politique-de-confidentialite"
              className="text-(--main-color) font-bold hover:underline"
            >
              Politique de confidentialité
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Page;
