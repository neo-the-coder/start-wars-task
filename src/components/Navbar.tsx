"use client";

import Link from "next/link";
import { routes } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <header className='sticky top-0 z-10 w-full sm:static sm:contents'>
      {/* Desktop Logo */}
      <div className='my-5 hidden justify-center sm:flex'>
        <Link href='/' className='relative inline-block h-25 w-60'>
          <Image
            src='/images/Star_Wars_Yellow_Logo.svg'
            alt='Star Wars Logo'
            priority
            fill
          />
        </Link>
      </div>
      <nav className='z-20 bg-gray-900 p-4 drop-shadow-sm drop-shadow-black sm:sticky sm:top-0'>
        <div className='mx-auto flex max-w-5xl items-center justify-between gap-4 p-4 sm:justify-center sm:p-0'>
          {/* Desktop nav */}
          <div className='hidden gap-3 sm:flex md:gap-6'>
            {routes.map((route) => (
              <Link
                key={route}
                href={`/${route}`}
                className={`lightsaber-link font-sterilict capitalize ${
                  path.startsWith(`/${route}`) ? "active" : ""
                }`}
              >
                {route}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className='shrink-0 text-white sm:hidden'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            <Image
              src={
                isOpen
                  ? "/icons/Star_Wars_X.svg"
                  : "/icons/Star_Wars_Burger.svg"
              }
              alt='Close'
              width={24}
              height={24}
              // className='h-6 w-6'
            />
          </button>

          {/* Mobile Logo */}
          <div className='mx-auto shrink-0 sm:hidden'>
            <Link href='/' className='relative block h-6 w-64'>
              <Image
                src='/images/Star_Wars_Yellow_One_Line_Logo.svg'
                alt='Star Wars Logo'
                className='mr-6'
                fill
                priority
              />
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`absolute top-20 left-0 -z-10 my-2 flex w-full flex-col items-center gap-2 bg-gray-900 p-4 transition-transform duration-300 ease-in-out sm:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-[calc(100%_+_312px)]"
          }`}
        >
          {routes.map((route) => (
            <Link
              key={route}
              href={`/${route}`}
              className={`font-sterilict lightsaber-link w-full px-4 py-2 text-center capitalize ${
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
