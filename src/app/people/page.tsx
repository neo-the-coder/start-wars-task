import { routesUnion } from "@/lib/types";
import { fetchPeople } from "../../lib/actions";
import List from "@/components/List";

export default async function PeoplePage() {
  const route: routesUnion = "people";
  
  const initialPeople = await fetchPeople(
    process.env.NEXT_PUBLIC_API_URL + route
  );

  return (
    <List
      route={route}
      initialEntities={initialPeople}
      fetchFunction={fetchPeople}
    />
  );
}
