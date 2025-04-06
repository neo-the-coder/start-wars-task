import { IPerson } from "@/lib/types";
import { extractId } from "@/lib/utils";
import Link from "next/link";
import { SingleValueRow } from "./DetailRow";

type PersonProps = {
  person: IPerson;
};

export default function Person({ person }: PersonProps): React.ReactNode {
  const id = extractId(person.url);
  return (
    <Link href={`/people/${id}`}>
      <div className="bg-black p-4 border-4 border-vivid-orange shadow-md rounded-md hover:bg-gray-900 transition font-distant-galaxy h-full">
        <h2 className="font-star-jedi-outline max-sm:text-xl text-center tracking-wider text-vivid-orange font-normal mb-4">{person.name}</h2>
        <ul>
          <SingleValueRow title="Gender" value={person.gender} />
          <SingleValueRow title="Height" value={person.height + " cm"} />
          <SingleValueRow title="Mass" value={person.mass + " kg"} />
          <SingleValueRow title="Birth Year" value={person.birth_year} />
        </ul>
      </div>
    </Link>
  );
}
