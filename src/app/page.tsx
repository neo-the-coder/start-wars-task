import NavCard from "@/components/NavCard";
import { routes } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    // <section className="">
      <ul className="min-h-screen p-8 max-w-[640px] mx-auto my-4 flex flex-col gap-12">
        {routes.map((route) => (
          <NavCard key={route} route={route} />
        ))}
      </ul>
    // </section>
  );
}
