import Breadcrumbs from "./Breadcrumbs";
import { MultipleValueRow, SingleValueRow } from "./DetailRow";

type DetailsProps = {
  name: string;
  children: React.ReactElement<
    typeof SingleValueRow | typeof MultipleValueRow
  >[];
  filmDescription?: string;
};

export default function Details({
  name,
  children,
  filmDescription,
}: DetailsProps) {
  const initials = name
    .split(" ")
    .map((initial) => initial[0])
    .join("");

  return (
    <section className='mx-auto min-h-screen max-w-4xl p-10 pt-0'>
      <Breadcrumbs />
      <section className='rounded-md bg-gradient-to-t from-gray-900/85 to-gray-700/85 p-8 shadow-lg'>
        <header className='mt-4 mb-12'>
          {/* Avatar */}
          <div className='border-primary mx-auto mb-8 flex h-30 w-30 items-center justify-center rounded-full border-2 bg-black'>
            <span className='font-sterilict text-primary text-2xl tracking-widest'>
              {initials}
            </span>
          </div>
          <h1 className='font-sterilict text-primary text-center text-4xl font-thin tracking-widest'>
            {name}
          </h1>
          {filmDescription && (
            <p className='mt-8 text-justify font-mono text-lg text-white'>
              {filmDescription}
            </p>
          )}
        </header>

        <div className='mt-8 text-white'>
          <h2 className='text-vivid-orange mb-8 font-sans text-3xl font-bold tracking-widest'>
            Details
          </h2>
          <ul className='space-y-4 font-sans tracking-wider'>{children}</ul>
        </div>
      </section>
    </section>
  );
}
