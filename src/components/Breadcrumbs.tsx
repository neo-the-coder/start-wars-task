"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathnames = usePathname().split("/").filter(Boolean);

  const breadcrumbLinks = pathnames.map((value, index) => {
    const href = "/" + pathnames.slice(0, index + 1).join("/");
    return { href, value };
  });

  return (
    <nav className='font-sterilict my-2 rounded-md bg-transparent p-4 pl-0 text-sm text-white uppercase shadow-lg'>
      <ul className='flex items-center space-x-2'>
        <li>
          <Link
            href='/'
            className='hover:text-primary text-shadow-md text-shadow-white/30'
          >
            Home
          </Link>
        </li>
        {breadcrumbLinks.map((link) => (
          <React.Fragment key={link.href}>
            <li className='text-gray-500'>/</li>
            <li>
              <Link
                href={link.href}
                className='hover:text-primary text-shadow-md text-shadow-white/30'
              >
                {link.value}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
