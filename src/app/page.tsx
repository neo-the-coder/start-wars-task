import NavCard from "@/components/NavCard";
import { routes } from "@/lib/utils";

export default function Home() {
  return (
    <ul className='mx-auto my-4 flex min-h-screen max-w-[640px] flex-col gap-12 p-8'>
      {routes.map((route) => (
        <NavCard key={route} route={route} />
      ))}
    </ul>
  );
}
