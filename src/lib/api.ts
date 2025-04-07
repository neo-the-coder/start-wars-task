import {
  IAPIResponseUnion,
  IEntityUnion,
  routesUnion,
} from "./types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchEntitiesOfType(route: routesUnion) {
  const res = await fetch(apiUrl + route);
  if (!res.ok) throw new Error("failed to fetch data");

  const data = (await res.json()) as IAPIResponseUnion;
  return data.results;
}

export async function fetchSingleEntity(route: routesUnion, id: string) {
  const res = await fetch(`${apiUrl}${route}/${id}`);
  if (!res.ok) return undefined;

  const entity: IEntityUnion = await res.json();
  return entity;
}
