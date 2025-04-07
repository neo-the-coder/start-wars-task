import Details from "@/components/Details";
import { MultipleValueRow, SingleValueRow } from "@/components/DetailRow";
import { fetchEntitiesOfType, fetchSingleEntity } from "@/lib/api";
import { IPerson } from "@/lib/types";
import { extractId } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageParams = { params: Promise<{ personId: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { personId } = await params;
  const person = (await fetchSingleEntity("people", personId)) as IPerson;

  if (!person) {
    return {
      title: "Person Not Found",
    };
  }

  return {
    title: person.name || "Star Wars Character",
    description: `Details about ${person.name}`,
  };
}

export async function generateStaticParams() {
  const people = await fetchEntitiesOfType("people");

  return people.map((person) => ({
    id: extractId(person.url),
  }));
}

export default async function SinglePersonPage({ params }: PageParams) {
  const { personId } = await params;
  const person = (await fetchSingleEntity("people", personId)) as IPerson;

  if (!person) notFound();

  return (
    <Details name={person.name}>
      <SingleValueRow title="Height" value={person.height + " cm"} />
      <SingleValueRow title="Mass" value={person.mass + " kg"} />
      <SingleValueRow title="Hair Color" value={person.hair_color} />
      <SingleValueRow title="Skin Color" value={person.skin_color} />
      <SingleValueRow title="Eye Color" value={person.eye_color} />
      <SingleValueRow title="Birth Year" value={person.birth_year} />
      <SingleValueRow title="Gender" value={person.gender} />
      <MultipleValueRow
        title="Homeworld"
        urls={[person.homeworld]}
        route="planets"
      />
      <MultipleValueRow title="Films" urls={person.films} route="films" />
      <MultipleValueRow title="Species" urls={person.species} route="species" />
      <MultipleValueRow
        title="Vehicles"
        urls={person.starships}
        route="vehicles"
      />
      <MultipleValueRow
        title="Starships"
        urls={person.starships}
        route="starships"
      />
    </Details>
  );
}
