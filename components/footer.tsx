import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const footerLinks = [
    "Contact",
    "Mentions légales",
    "Confidentialité",
    "Plan du site",
  ];
  return (
    <footer className="overflow-hidden bg-(--main-color) w-full p-10 md:px-20 xl:px-30 2xl:px-40 xl:py-20 h-dvh flex flex-col gap-10 relative">
      <section className="flex justify-between gap-3">
        <ul className="flex flex-col gap-3">
          {footerLinks.map((link, index) => (
            <li
              key={index}
              className="text-(--sec-color) text-lg xl:text-2xl 2xl:text-3xl mb-2"
            >
              {" "}
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline transition-colors duration-300 ease-in-out"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 xl:gap-12 flex-col xl:flex-row  ">
          <FontAwesomeIcon
            className="text-(--sec-color) w-13! h-13! xl:size-15! cursor-pointer"
            icon={faGithub}
          />
          <FontAwesomeIcon
            className="text-(--sec-color) w-13! h-13! xl:size-15! cursor-pointer"
            icon={faSquareLinkedin}
          />
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
        className="absolute max-w-full -top-45  md:-top-70 xl:left-90 -rotate-90"
      />
    </footer>
  );
};

export default Footer;
