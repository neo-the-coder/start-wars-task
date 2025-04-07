import { routesUnion } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavCardProps = {
  route: routesUnion;
};

export default function NavCard({ route }: NavCardProps) {
  return (
    <Link
      href={`/${route}`}
      className="relative shadow-md rounded-md h-[200px] max-w-[600px] group odd:ml-[20px] even:mr-[20px] sm:odd:ml-[40px] sm:even:mr-[40px] overflow-hidden border border-gray-900"
    >
      <Image
        src={`/images/${route}.webp`}
        alt={route}
        fill
        className="w-full h-full object-cover object-top group-hover:scale-110 transition"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent">
        <span className="absolute bottom-2 group-odd:left-8 group-even:right-8 font-sterilict tracking-widest font-lg transition group-hover:-translate-y-4 group-hover:text-primary uppercase">
          {route}
        </span>
      </div>
    </Link>
  );
}
