import { routesUnion } from "@/lib/types";
import { fetchEntities } from "../../lib/actions";
import List from "@/components/List";

export default async function StarshipsPage() {
  const route: routesUnion = "starships";

  const initialEntities = await fetchEntities(
    process.env.NEXT_PUBLIC_API_URL + route,
  );

  return (
    <List
      route={route}
      initialEntities={initialEntities}
      fetchFunction={fetchEntities}
    />
  );
}
