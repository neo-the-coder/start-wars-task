import Breadcrumbs from "./Breadcrumbs";
import { MultipleValueRow, SingleValueRow } from "./DetailRow";

type DetailsProps = {
  name: string;
  children: React.ReactElement<typeof SingleValueRow | typeof MultipleValueRow>[];
  filmDescription?: string;
};

export default function Details({ name, children, filmDescription }: DetailsProps) {
  const initials = name
    .split(" ")
    .map((initial) => initial[0])
    .join("");

  return (
    <section className="min-h-screen max-w-4xl mx-auto p-10 pt-0">
      <Breadcrumbs />
      <section className="from-gray-900 to-gray-700 bg-gradient-to-t p-8 rounded-md shadow-lg">
        <header className="mt-4 mb-12">
          {/* Avatar */}
          <div className="mx-auto w-30 h-30 rounded-full bg-black border-primary border-2 flex items-center justify-center mb-8">
            <span className="text-2xl font-sterilict tracking-widest text-primary">
              {initials}
            </span>
          </div>
          <h1 className="text-center text-4xl font-thin font-sterilict tracking-widest text-primary">
            {name}
          </h1>
          {filmDescription && (
            <p className="mt-8 font-mono text-lg text-justify text-white">{filmDescription}</p>
          )}
        </header>

        <div className="mt-8 text-white">
          <h2 className="text-3xl mb-8 font-bold font-sans tracking-widest text-vivid-orange">
            Details
          </h2>
          <ul className="space-y-4 font-sans tracking-wider">
            {children}
          </ul>
        </div>
      </section>
    </section>
  );
}
