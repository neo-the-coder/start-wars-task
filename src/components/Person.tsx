import { IPerson } from "@/lib/types";
import { extractId } from "@/lib/utils";
import Link from "next/link";

type PersonProps = {
  person: IPerson;
};

export default function Person({ person }: PersonProps): React.ReactNode {
  const id = extractId(person.url);
  return (
    <Link href={`/people/${id}`}>
      <div className="bg-black p-4 border-4 border-vivid-orange shadow-md hover:bg-gray-900 transition font-anakinmono h-full">
        <h2 className="font-distant-galaxy max-sm:text-xl text-center tracking-wider text-vivid-orange font-normal mb-4">{person.name}</h2>
        <p>Gender: <span className="text-primary">{person.gender}</span></p>
        <p>Height: <span className="text-primary">{person.height} cm</span></p>
        <p>Mass: <span className="text-primary">{person.mass} kg</span></p>
        <p>Birth Year: <span className="text-primary">{person.birth_year}</span></p>
      </div>
    </Link>
  );
}
