"use client";

const Header = () => {
  return (
    <header
      className={
        "w-full h-16 flex items-center  md:px-20 py-2 absolute top-0 z-50 transition-colors duration-300 selection:bg-(--sec-color) selection:text-(--main-color)!  "
      }
    >
      <nav className="flex  gap-6 items-center w-full justify-center lg:justify-end">
        <span className="flex  gap-6 items-center max-w-full  font-semibold ">
          <button
            type="button"
            className="  text-normal md:text-lg! xl:text-xl text-(--sec-color)  hover:cursor-pointer hover:underline"
            onClick={() => {
              document
                .getElementById("who")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hey !
          </button>
          <button
            type="button"
            className=" text-normal md:text-lg! xl:text-xl text-(--sec-color) hover:cursor-pointer hover:underline"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projets
          </button>
          <button
            className="border-solid border-2 border-(--sec-color) ml-6 rounded-md px-6 py-1 cursor-pointer hover:underline text-normal md:text-lg! xl:text-xl text-(--sec-color)"
            type="button"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            On discute ?
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
