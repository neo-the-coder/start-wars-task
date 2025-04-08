"use server";

import { IAPIResponseUnion } from "./types";

export const fetchEntities = async (
  url: string,
): Promise<IAPIResponseUnion> => {
  try {
    const response = await fetch(url, { cache: "force-cache" });
    const data: IAPIResponseUnion = await response.json();
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
