"use server";

import { IFilmsAPIResponse, IPeopleAPIResponse } from "./types";

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

export const fetchFilms = async (url: string): Promise<IFilmsAPIResponse> => {
  try {
    const response = await fetch(url, { cache: "force-cache" });
    const data = (await response.json()) as IFilmsAPIResponse;
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};