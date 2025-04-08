import Details from "@/components/Details";
import { MultipleValueRow, SingleValueRow } from "@/components/DetailRow";
import { fetchEntitiesOfType, fetchSingleEntity } from "@/lib/api";
import { IStarship } from "@/lib/types";
import { extractId } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageParams = { params: Promise<{ starshipId: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { starshipId } = await params;
  const starship = (await fetchSingleEntity(
    "starships",
    starshipId,
  )) as IStarship;

  if (!starship) {
    return {
      title: "starships Not Found",
    };
  }

  return {
    title: starship.name || "Star Wars Starships",
    description: `Details about ${starship.name}`,
  };
}

export async function generateStaticParams() {
  const starships = await fetchEntitiesOfType("starships");

  return starships.map((starship) => ({
    id: extractId(starship.url),
  }));
}

export default async function SingleStarshipsPage({ params }: PageParams) {
  const { starshipId } = await params;
  const starship = (await fetchSingleEntity(
    "starships",
    starshipId,
  )) as IStarship;

  if (!starship) notFound();

  return (
    <Details name={starship.name}>
      <SingleValueRow title='Model' value={starship.model} />
      <SingleValueRow title='Manufacturer' value={starship.manufacturer} />
      <SingleValueRow title='Cost' value={starship.cost_in_credits + " Cr."} />
      <SingleValueRow title='Length' value={starship.length} />
      <SingleValueRow
        title='Max Speed'
        value={starship.max_atmosphering_speed}
      />
      <SingleValueRow title='Crew' value={starship.crew} />
      <SingleValueRow title='Passengers' value={starship.passengers} />
      <SingleValueRow title='Cargo Capacity' value={starship.cargo_capacity} />
      <SingleValueRow title='Consumables' value={starship.consumables} />
      <SingleValueRow
        title='Hyperdrive Rating'
        value={starship.hyperdrive_rating}
      />
      <SingleValueRow title='MGLT' value={starship.MGLT} />
      <SingleValueRow title='Class' value={starship.starship_class} />
      <MultipleValueRow title='pilots' urls={starship.pilots} route='people' />
      <MultipleValueRow title='Films' urls={starship.films} route='films' />
    </Details>
  );
}
