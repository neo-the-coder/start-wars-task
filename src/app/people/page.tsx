import { fetchPeople } from "../../lib/actions";
import PeopleList from "@/components/PeopleList";

export default async function PeoplePage() {
  const initialPeople = await fetchPeople("https://swapi.dev/api/people/");

  return <PeopleList initialPeople={initialPeople} />;
}
