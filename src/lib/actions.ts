"use server";

import { IPeopleAPIResponse } from "./types";

export const fetchPeople = async (url: string): Promise<IPeopleAPIResponse> => {
  try {
    const response = await fetch(url, { cache: "force-cache" });
    const data = (await response.json()) as IPeopleAPIResponse;
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
