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
      className='group relative h-[200px] max-w-[600px] overflow-hidden rounded-md border border-gray-900 shadow-md odd:ml-[20px] even:mr-[20px] sm:odd:ml-[40px] sm:even:mr-[40px]'
    >
      <Image
        src={`/images/${route}.webp`}
        alt={route}
        fill
        className='h-full w-full object-cover object-top transition group-hover:scale-110'
      />
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent'>
        <span className='font-sterilict font-lg group-hover:text-primary absolute bottom-2 tracking-widest uppercase transition group-odd:left-8 group-even:right-8 group-hover:-translate-y-4'>
          {route}
        </span>
      </div>
    </Link>
  );
}
