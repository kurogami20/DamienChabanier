"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-end px-20 py-2 bg-none fixed top-0 z-50">
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-xl text-(--sec-color) ">
          Qui suis-je ?
        </Link>
        <Link href="/about" className="text-xl text-(--sec-color)">
          Jusqu'à maintenant
        </Link>
        <button
          className="border-solid border-2 border-(--sec-color) ml-6 rounded-md px-6 py-1 cursor-pointer"
          type="button"
        >
          <Link href="/projects" className="text-xl text-(--sec-color)  ">
            On discute ?
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
