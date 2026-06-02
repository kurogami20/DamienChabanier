const projects = [
  {
    titre: "Association AILE",
    rotate: "rotate-5",
    projet: [
      {
        content: {
          image: "aile1.png",
          link: "http://dam31270.free.fr/index.php",
        },
      },
      {
        content: [
          {
            name: "Association AILE",
            description:
              "Ma mission au sein de l'association AILE était de refondre leur site web pour le rendre plus accessible et plus moderne. J'ai travaillé en étroite collaboration avec les membres de l'association pour comprendre leurs besoins et leurs objectifs. J'ai utilisé mes compétences en développement et conception web pour créer un site qui reflète l'identité de l'association tout en offrant une expérience utilisateur améliorée. Le nouveau site web va permettre à l'association de mieux communiquer avec ses membres et de promouvoir ses activités de manière plus efficace.",
            stack: [
              {
                name: "frontend",
                techno: [
                  { name: "html" },
                  { name: "php" },
                  { name: "css" },
                  { name: "javascript" },
                  { name: "tailwind" },
                  { name: "flowbite" },
                ],
              },
              {
                name: "backend",
                techno: [{ name: "php" }, { name: "SQL" }, { name: "mysql" }],
              },
              {
                name: "Conception",
                techno: [{ name: "figma" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    titre: "Projet Green Roots",
    rotate: "-rotate-5",
    projet: [
      {
        content: {
          image: "greenroots1.png",
          link: "https://greenroots2025.surge.sh", // Ajoutez le lien du projet si disponible
        },
      },
      {
        content: [
          {
            name: "Projet Green Roots",
            description:
              "Réalisation d'un projet Full Stack en distanciel. Ma mission a consisté à concevoir l'application web de bout en bout (maquettage, schémas UML et Merise) et à développer une API REST. J'ai implémenté l'interface utilisateur dynamique ainsi qu'un backend robuste, tout en intégrant des tests unitaires et d'intégration et en mettant en place un pipeline de déploiement continu.",
            stack: [
              {
                name: "frontend",
                techno: [
                  { name: "react" },
                  { name: "typescript" },
                  { name: "tailwind" },
                ],
              },
              {
                name: "backend",
                techno: [
                  { name: "express" },
                  { name: "postgresql" },
                  { name: "sequelize" },
                  { name: "docker" },
                  { name: "api rest" },
                ],
              },
              {
                name: "Conception & DevOps",
                techno: [
                  { name: "merise" },
                  { name: "uml" },
                  { name: "git/github" },
                  { name: "surge" },
                  { name: "jest/vitest" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    titre: "MNE 65",
    rotate: "rotate-5",
    projet: [
      {
        content: {
          image: "mne65.png",
          link: "https://maisondelanature65.com", // Ajoutez le lien du projet si disponible
        },
      },
      {
        content: [
          {
            name: "MNE 65",
            description:
              "Mission de refonte et de conception du site web de la Maison de la Nature et de l'Environnement (MNE 65) en utilisant WordPress Core. Le projet s'est articulé autour de l'analyse structurelle de l'existant, de l'optimisation pour le référencement naturel (SEO), de l'intégration de principes d'éco-conception et de l'accessibilité web. J'ai également rédigé un guide utilisateur pour faciliter la prise en main de l'outil.",
            stack: [
              {
                name: "frontend / CMS",
                techno: [
                  { name: "wordpress" },
                  { name: "html" },
                  { name: "css" },
                ],
              },
              {
                name: "Optimisation",
                techno: [
                  { name: "seo" },
                  { name: "éco-conception" },
                  { name: "accessibilité" },
                ],
              },
              {
                name: "Documentation",
                techno: [{ name: "guide d'utilisation" }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default projects;
