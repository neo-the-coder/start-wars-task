"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  "films",
  "people",
  "starships",
  "vehicles",
  "species",
  "planets",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="bg-gray-900 p-4 z-20 sm:sticky sm:top-0">
      <div className="mx-auto max-w-5xl flex items-center justify-between sm:justify-center gap-4 p-4 sm:p-0 bg-gray-900">
        {/* Desktop nav */}
        <div className="hidden sm:flex gap-6">
          {links.map((res) => (
            <Link
              key={res}
              href={`/${res}`}
              className={`capitalize lightsaber-link ${path === `/${res}` ? 'active' : ''}`}
            >
              {res}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <img
            src={
              isOpen ? "/icons/Star_Wars_X.svg" : "/icons/Star_Wars_Burger.svg"
            }
            alt="Close"
            className="w-6 h-6"
          />
        </button>

        {/* Logo */}
        <div className="sm:hidden mx-auto h-6 shrink-0">
          <img
            src="/images/Star_Wars_Yellow_One_Line_Logo.svg"
            alt="Star Wars Logo"
            className="w-full h-full mr-6"
          />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`sm:hidden bg-gray-900 absolute -z-10 left-0 top-20 w-full my-2 p-4 flex flex-col items-center gap-2 transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {links.map((res) => (
          <Link
            key={res}
            href={`/${res}`}
            className={`capitalize text-center w-full px-4 py-2 lightsaber-link ${path === `/${res}` ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {res}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
