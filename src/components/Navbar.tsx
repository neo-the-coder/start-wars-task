"use client";

import Link from "next/link";
import { routes } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky sm:static sm:contents top-0 w-full z-10">
      {/* Desktop Logo */}
      <div className="hidden sm:block my-5">
        <Link href="/">
          <img
            src="/images/Star_Wars_Yellow_Logo.svg"
            alt="Star Wars Logo"
            className="h-25 w-full block mx-auto"
          />
        </Link>
      </div>
      <nav className="bg-gray-900 p-4 z-20 sm:sticky sm:top-0 drop-shadow-sm drop-shadow-black">
        <div className="mx-auto max-w-5xl flex items-center justify-between sm:justify-center gap-4 p-4 sm:p-0 bg-gray-900">
          {/* Desktop nav */}
          <div className="hidden sm:flex gap-3 md:gap-6">
            {routes.map((route) => (
              <Link
                key={route}
                href={`/${route}`}
                className={`capitalize lightsaber-link font-sterilict ${
                  path.startsWith(`/${route}`) ? "active" : ""
                }`}
              >
                {route}
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
                isOpen
                  ? "/icons/Star_Wars_X.svg"
                  : "/icons/Star_Wars_Burger.svg"
              }
              alt="Close"
              className="w-6 h-6"
            />
          </button>

          {/* Mobile Logo */}
          <div className="sm:hidden mx-auto h-6 shrink-0">
            <Link href="/">
              <img
                src="/images/Star_Wars_Yellow_One_Line_Logo.svg"
                alt="Star Wars Logo"
                className="w-full h-full mr-6"
              />
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`sm:hidden bg-gray-900 absolute -z-10 left-0 top-20 w-full my-2 p-4 flex flex-col items-center gap-2 transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-[calc(100%_+_312px)]"
          }`}
        >
          {routes.map((route) => (
            <Link
              key={route}
              href={`/${route}`}
              className={`capitalize font-sterilict text-center w-full px-4 py-2 lightsaber-link ${
                path.startsWith(`/${route}`) ? "active" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {route}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
