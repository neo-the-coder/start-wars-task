import Details from "@/components/Details";
import { MultipleValueRow, SingleValueRow } from "@/components/DetailRow";
import { fetchEntitiesOfType, fetchSingleEntity } from "@/lib/api";
import { IPlanet } from "@/lib/types";
import { extractId } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageParams = { params: Promise<{ planetId: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { planetId } = await params;
  const planet = (await fetchSingleEntity("planets", planetId)) as IPlanet;

  if (!planet) {
    return {
      title: "planet Not Found",
    };
  }

  return {
    title: planet.name || "Star Wars Planets",
    description: `Details about ${planet.name}`,
  };
}

export async function generateStaticParams() {
  const planets = await fetchEntitiesOfType("planets");

  return planets.map((planet) => ({
    id: extractId(planet.url),
  }));
}

export default async function SinglePlanetPage({ params }: PageParams) {
  const { planetId } = await params;
  const planet = (await fetchSingleEntity("planets", planetId)) as IPlanet;

  if (!planet) notFound();

  return (
    <Details name={planet.name}>
      <SingleValueRow title='Rotation Period' value={planet.rotation_period} />
      <SingleValueRow title='Orbital Period' value={planet.orbital_period} />
      <SingleValueRow title='Diameter' value={planet.diameter + " km"} />
      <SingleValueRow title='Climate' value={planet.climate} />
      <SingleValueRow title='Gravity' value={planet.gravity} />
      <SingleValueRow title='Terrain' value={planet.terrain} />
      <SingleValueRow title='Surface Water' value={planet.surface_water} />
      <SingleValueRow title='Population' value={planet.population} />
      <MultipleValueRow
        title='Residents'
        urls={planet.residents}
        route='people'
      />
      <MultipleValueRow title='Films' urls={planet.films} route='films' />
    </Details>
  );
}
