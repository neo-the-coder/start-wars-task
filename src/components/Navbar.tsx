// import Link from 'next/link';

// const resources = ['films', 'people', 'starships', 'vehicles', 'species', 'planets'];

// const Navbar = () => (
//   <nav className="flex items-center justify-center gap-4 p-4 bg-gray-900">
//     {resources.map((res) => (
//       <Link
//         key={res}
//         href={`/${res}`}
//         className="hover:underline hover:text-primary capitalize"
//       >
//         {res}
//       </Link>
//     ))}
//   </nav>
// );

// export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const resources = [
  "films",
  "people",
  "starships",
  "vehicles",
  "species",
  "planets",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-5xl flex items-center justify-between sm:justify-center gap-4 p-4 bg-gray-900">

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-6">
          {resources.map((res) => (
            <Link
              key={res}
              href={`/${res}`}
              className="hover:underline hover:text-primary capitalize"
            >
              {res}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Image
              src="/icons/Star_Wars_X.svg"
              alt="Close"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icons/Star_Wars_Burger.svg"
              alt="Close"
              width={24}
              height={24}
            />
          )}
        </button>
        <Image 
            src="/images/Star_Wars_Yellow_One_Line_Logo.svg"
            alt="Star Wars Logo"
            width={250}
            height={100}
            className="sm:hidden grow mr-6"
          />
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-2 flex flex-col gap-4 px-2 pb-4">
          {resources.map((res) => (
            <Link
              key={res}
              href={`/${res}`}
              className="capitalize hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {res}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
