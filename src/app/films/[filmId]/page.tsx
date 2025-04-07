import Details from "@/components/Details";
import { MultipleValueRow, SingleValueRow } from "@/components/DetailRow";
import { fetchEntitiesOfType, fetchSingleEntity } from "@/lib/api";
import { IFilm } from "@/lib/types";
import { extractId, formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageParams = { params: Promise<{ filmId: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { filmId } = await params;
  const film = (await fetchSingleEntity("films", filmId)) as IFilm;

  if (!film) {
    return {
      title: "Film Not Found",
    };
  }

  return {
    title: film.title || "Star Wars Films",
    description: `Details about ${film.title}`,
  };
}

export async function generateStaticParams() {
  const films = await fetchEntitiesOfType("films");

  return films.map((film) => ({
    id: extractId(film.url),
  }));
}

export default async function SingleFilmPage({ params }: PageParams) {
  const { filmId } = await params;
  const film = (await fetchSingleEntity("films", filmId)) as IFilm;

  if (!film) notFound();

  return (
    <Details name={film.title} filmDescription={film.opening_crawl}>
      <SingleValueRow title="Episode" value={film.episode_id.toString()} />
      <SingleValueRow title="Director" value={film.director} />
      <SingleValueRow title="Producer" value={film.producer} />
      <SingleValueRow
        title="Release Date"
        value={formatDate(film.release_date)}
      />
      <MultipleValueRow
        title="Characters"
        urls={film.characters}
        route="people"
      />
      <MultipleValueRow title="Planets" urls={film.planets} route="planets" />
      <MultipleValueRow
        title="Starships"
        urls={film.starships}
        route="starships"
      />
      <MultipleValueRow
        title="Vehicles"
        urls={film.vehicles}
        route="vehicles"
      />
      <MultipleValueRow title="Species" urls={film.species} route="species" />
    </Details>
  );
}
