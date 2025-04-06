import Breadcrumbs from "./Breadcrumbs";
import { MultipleValueRow, SingleValueRow } from "./DetailRow";

type DetailsProps = {
  name: string;
  children: React.ReactElement<typeof SingleValueRow | typeof MultipleValueRow>[];
};

export default function Details({ name, children }: DetailsProps) {
  const initials = name
    .split(" ")
    .map((initial) => initial[0])
    .join("");

  return (
    <main className="min-h-screen bg-background p-10 pt-0">
      <Breadcrumbs />
      <section className="max-w-5xl mx-auto from-gray-900 to-gray-700 bg-gradient-to-t p-8 rounded-md shadow-lg">
        <header className="mt-4 mb-12">
          {/* Avatar */}
          <div className="mx-auto w-30 h-30 rounded-full bg-black border-primary border-2 flex items-center justify-center mb-8">
            <span className="text-2xl tracking-wider font-star-jedi-outline text-primary">
              {initials}
            </span>
          </div>
          <h1 className="text-center text-4xl font-thin font-star-jedi-outline tracking-widest text-primary">
            {name}
          </h1>
        </header>

        <div className="mt-8 font-anakinmono text-white">
          <h2 className="text-2xl mb-8 font-normal font-distant-galaxy tracking-widest text-vivid-orange">
            Details
          </h2>
          <ul className="space-y-4 font-distant-galaxy tracking-widest">
            {children}
          </ul>
        </div>
      </section>
    </main>
  );
}
