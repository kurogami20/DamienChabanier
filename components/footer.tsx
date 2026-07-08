import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const footerLinks = [
    "Accueil",
    "Contact",
    "Mentions légales",
    "Politique de confidentialité",
    "Plan du site",
  ];
  return (
    <footer className="overflow-hidden bg-(--main-color) w-full p-10 md:px-20 xl:px-30 2xl:px-40 xl:py-20 h-dvh flex flex-col gap-10 relative">
      <section className="flex justify-between gap-3">
        <ul className="flex flex-col gap-3">
          {footerLinks.map((link, index) => (
            <li
              key={index + link}
              className="text-(--sec-color) text-lg xl:text-2xl 2xl:text-3xl mb-2"
            >
              {" "}
              <a
                href={`${link === "Accueil" ? "/" : `${link === "Contact" ? "/#contact" : `/${link.toLowerCase().replace(/\s+/g, "-").replace(/é/g, "e")}`}`}`}
                className="hover:underline transition-colors duration-300 ease-in-out"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 xl:gap-12 flex-col xl:flex-row  ">
          <a
            href="https://github.com/kurogami20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-(--sec-color) w-13! h-13! xl:size-15! cursor-pointer"
              icon={faGithub}
            />
          </a>
          <a
            href="www.linkedin.com/in/damien-chabanier-822190244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-(--sec-color) w-13! h-13! xl:size-15! cursor-pointer"
              icon={faSquareLinkedin}
            />
          </a>
        </div>
      </section>
      <img
        src="/logoFolio.svg"
        alt="logo"
        className="flex md:items-center max-w-full w-3/7 xl:w-2/7 "
      />
      <img
        src="/Line_5.svg"
        alt="logo"
        className="absolute max-w-full -top-45  md:-top-70 min-[1434]:left-100 left-15 min-[1650px]:left-125 -rotate-90"
      />
    </footer>
  );
};

export default Footer;
