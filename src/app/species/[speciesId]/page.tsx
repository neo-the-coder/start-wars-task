import Details from "@/components/Details";
import { MultipleValueRow, SingleValueRow } from "@/components/DetailRow";
import { fetchEntitiesOfType, fetchSingleEntity } from "@/lib/api";
import { ISpecies } from "@/lib/types";
import { extractId } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageParams = { params: Promise<{ speciesId: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { speciesId } = await params;
  const species = (await fetchSingleEntity("species", speciesId)) as ISpecies;

  if (!species) {
    return {
      title: "species Not Found",
    };
  }

  return {
    title: species.name || "Star Wars Species",
    description: `Details about ${species.name}`,
  };
}

export async function generateStaticParams() {
  const species = await fetchEntitiesOfType("species");

  return species.map((species) => ({
    id: extractId(species.url),
  }));
}

export default async function SingleSpeciesPage({ params }: PageParams) {
  const { speciesId } = await params;
  const species = (await fetchSingleEntity("species", speciesId)) as ISpecies;

  if (!species) notFound();

  return (
    <Details name={species.name}>
      <SingleValueRow title="Classification" value={species.classification} />
      <SingleValueRow title="Designation" value={species.designation} />
      <SingleValueRow title="Avg. Height" value={species.average_height + " cm"} />
      <SingleValueRow title="Skin Colors" value={species.skin_colors} />
      <SingleValueRow title="Hair Colors" value={species.hair_colors} />
      <SingleValueRow title="Eye Colors" value={species.eye_colors} />
      <SingleValueRow title="Avg. Lifespan" value={species.average_lifespan} />
      <MultipleValueRow
        title="Homeworld"
        urls={[species.homeworld]}
        route="planets"
      />
      <SingleValueRow title="Language" value={species.language} />
      <MultipleValueRow title="People" urls={species.people} route="people" />
      <MultipleValueRow title="Films" urls={species.films} route="films" />
    </Details>
  );
}
