import { IEntityKeysUnion, routesUnion } from "./types";

export const extractId = (url: string) => url.split("/").filter(Boolean).pop();

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`;
};

export const shownDetails: {
  [key in routesUnion]: {
    detailTitle: string;
    detailProp: IEntityKeysUnion;
  }[];
} = {
  films: [
    { detailTitle: "Director", detailProp: "director" },
    { detailTitle: "Producer(s)", detailProp: "producer" },
    { detailTitle: "Episode", detailProp: "episode_id" },
    { detailTitle: "Release Date", detailProp: "release_date" },
  ],
  people: [
    { detailTitle: "Gender", detailProp: "gender" },
    { detailTitle: "Height", detailProp: "height" },
    { detailTitle: "Mass", detailProp: "mass" },
    { detailTitle: "Birth Year", detailProp: "birth_year" },
  ],
  starships: [
    { detailTitle: "Cost", detailProp: "cost_in_credits" },
    { detailTitle: "Class", detailProp: "starship_class" },
    { detailTitle: "Crew", detailProp: "crew" },
    { detailTitle: "Max Speed", detailProp: "max_atmosphering_speed" },
  ],
  vehicles: [
    { detailTitle: "Cost", detailProp: "cost_in_credits" },
    { detailTitle: "Class", detailProp: "vehicle_class" },
    { detailTitle: "Crew", detailProp: "crew" },
    { detailTitle: "Max Speed", detailProp: "max_atmosphering_speed" },
  ],
  species: [
    { detailTitle: "Classification", detailProp: "classification" },
    { detailTitle: "designation", detailProp: "designation" },
    { detailTitle: "Avg. lifespan", detailProp: "average_lifespan" },
    { detailTitle: "Language", detailProp: "language" },
  ],
  planets: [
    { detailTitle: "Population", detailProp: "population" },
    { detailTitle: "Climate", detailProp: "climate" },
    { detailTitle: "Terrain", detailProp: "terrain" },
    { detailTitle: "Diameter", detailProp: "diameter" },
  ],
};

export const formattedValue = (value: string, detailProp: IEntityKeysUnion) => {
  if (value.toLowerCase() === "n/a") return value;
  switch (detailProp) {
    case "release_date":
      return formatDate(value);
    case "height":
      return value + " cm";
    case "mass":
      return value + " kg";
    case "cost_in_credits":
      return value + " Cr.";
    case "diameter":
      return value + " km";
    default:
      return value;
  }
};
