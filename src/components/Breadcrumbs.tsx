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
    <nav className="text-sm text-white font-sterilict uppercase bg-transparent p-4 pl-0 rounded-md shadow-lg my-2">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
        </li>
        {breadcrumbLinks.map((link) => (
          <React.Fragment key={link.href}>
            <li className="text-gray-500">/</li>
            <li>
              <Link href={link.href} className="hover:text-primary">
                {link.value}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
