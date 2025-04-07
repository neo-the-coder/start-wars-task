import List from "@/components/List";
import { fetchFilms } from "../../lib/actions";
import { routesUnion } from "@/lib/types";

export default async function FilmsPage() {
  const route: routesUnion = "films";

  const initialFilms = await fetchFilms(
    process.env.NEXT_PUBLIC_API_URL + route
  );

  return (
    <List
      route={route}
      initialEntities={initialFilms}
      fetchFunction={fetchFilms}
    />
  );
}
