import { IPeopleAPIResponse, IPerson } from "./types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAllPeople() {
  const res = await fetch(apiUrl + "people");
  if (!res.ok) throw new Error("failed to fetch data");

  const data = (await res.json()) as IPeopleAPIResponse;
  return data.results;
}

export async function fetchSinglePerson(personId: string) {
  const res = await fetch(apiUrl + "people/" + personId)
  if (!res.ok) return undefined

  const person: IPerson = await res.json()
  return person;
}