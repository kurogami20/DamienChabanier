const projects = [
  {
    titre: "Association AILE - 2025",
    rotate: "rotate-5",
    image: "aile1.png",
    link: "http://dam31270.free.fr/index.php",
    name: "Association AILE",
    description:
      "Ma mission au sein de l'association AILE était de refondre leur site web pour le rendre plus accessible et plus moderne. J'ai travaillé en étroite collaboration avec les membres de l'association pour comprendre leurs besoins et leurs objectifs. J'ai utilisé mes compétences en développement et conception web pour créer un site qui reflète l'identité de l'association tout en offrant une expérience utilisateur améliorée. Le nouveau site web va permettre à l'association de mieux communiquer avec ses membres et de promouvoir ses activités de manière plus efficace.",
    stack: [
      {
        name: "frontend",
        techno: ["html", "php", "css", "javascript", "tailwind", "flowbite"],
      },
      { name: "backend", techno: ["php", "SQL", "mysql"] },
      { name: "Conception", techno: ["figma"] },
    ],
  },
  {
    titre: "Projet Green Roots - 2025",
    rotate: "-rotate-5",
    image: "greenroots1.png",
    link: "https://greenroots2025.surge.sh",
    name: "Projet Green Roots",
    description:
      "Réalisation d'un projet Full Stack en distanciel. Ma mission a consisté à concevoir l'application web de bout en bout (maquettage, schémas UML et Merise) et à développer une API REST. J'ai implémenté l'interface utilisateur dynamique ainsi qu'un backend robuste, tout en intégrant des tests unitaires et d'intégration et en mettant en place un pipeline de déploiement continu.",
    stack: [
      { name: "frontend", techno: ["react", "typescript", "tailwind"] },
      {
        name: "backend",
        techno: ["express", "postgresql", "sequelize", "docker", "api rest"],
      },
      {
        name: "Conception & DevOps",
        techno: ["merise", "uml", "git/github", "surge", "jest/vitest"],
      },
    ],
  },
  {
    titre: "MNE 65 - 2024",
    rotate: "rotate-5",
    image: "mne65.png",
    link: "https://maisondelanature65.com",
    name: "MNE 65",
    description:
      "Mission de refonte et de conception du site web de la Maison de la Nature et de l'Environnement (MNE 65) en utilisant WordPress Core. Le projet s'est articulé autour de l'analyse structurelle de l'existant, de l'optimisation pour le référencement naturel (SEO), de l'intégration de principes d'éco-conception et de l'accessibilité web. J'ai également rédigé un guide utilisateur pour faciliter la prise en main de l'outil.",
    stack: [
      { name: "frontend / CMS", techno: ["wordpress", "html", "css"] },
      {
        name: "Optimisation",
        techno: ["seo", "éco-conception", "accessibilité"],
      },
      { name: "Documentation", techno: ["guide d'utilisation"] },
    ],
  },
];

export default projects;
