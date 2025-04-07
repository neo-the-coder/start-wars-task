export interface IEntity {
  name: string;
  edited: string;
  created: string;
  url: string;
  films: string[];
}

export interface IFilm extends Omit<IEntity, "name"> {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
}

export interface ICharacter extends IEntity {
  homeworld: string;
}

export interface ISpecies extends ICharacter {
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
  people: string[];
}

type Gender = "male" | "female" | "n/a" | "unknown";

export interface IPerson extends ICharacter {
  skin_color: string;
  hair_color: string;
  eye_color: string;
  height: string;
  starships: string[];
  vehicles: string[];
  birth_year: string;
  gender: Gender;
  species: string[];
  mass: number;
}

export interface IPlanet extends IEntity {
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
}

export interface IVehicle extends IEntity {
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots?: string[];
}

export interface IStarship extends IVehicle {
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

export interface IAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface IPeopleAPIResponse extends IAPIResponse {
  results: IPerson[];
}

export interface IFilmsAPIResponse extends IAPIResponse {
  results: IFilm[];
}

export interface IStarshipsAPIResponse extends IAPIResponse {
  results: IStarship[];
}

export interface IVehiclesAPIResponse extends IAPIResponse {
  results: IVehicle[];
}

export interface ISpeciesAPIResponse extends IAPIResponse {
  results: ISpecies[];
}

export interface IPlanetsAPIResponse extends IAPIResponse {
  results: IPlanet[];
}

export type IAPIResponseUnion =
  | IFilmsAPIResponse
  | IPeopleAPIResponse
  | IStarshipsAPIResponse
  | IVehiclesAPIResponse
  | ISpeciesAPIResponse
  | IPlanetsAPIResponse;

export type IEntityUnion = IFilm | IPerson | IStarship | IVehicle | ISpecies | IPlanet;

export type IEntityKeysUnion = keyof IPerson | keyof IVehicle | keyof IFilm | keyof IStarship | keyof ISpecies | keyof IPlanet;

export type routesUnion =
  | "films"
  | "people"
  | "starships"
  | "vehicles"
  | "species"
  | "planets";