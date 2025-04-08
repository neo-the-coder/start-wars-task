import Details from "@/components/Details";
import { MultipleValueRow, SingleValueRow } from "@/components/DetailRow";
import { fetchEntitiesOfType, fetchSingleEntity } from "@/lib/api";
import { IVehicle } from "@/lib/types";
import { extractId } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageParams = { params: Promise<{ vehicleId: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { vehicleId } = await params;
  const vehicle = (await fetchSingleEntity("vehicles", vehicleId)) as IVehicle;

  if (!vehicle) {
    return {
      title: "vehicles Not Found",
    };
  }

  return {
    title: vehicle.name || "Star Wars vehicles",
    description: `Details about ${vehicle.name}`,
  };
}

export async function generateStaticParams() {
  const vehicles = await fetchEntitiesOfType("vehicles");

  return vehicles.map((vehicle) => ({
    id: extractId(vehicle.url),
  }));
}

export default async function SingleVehiclesPage({ params }: PageParams) {
  const { vehicleId } = await params;
  const vehicle = (await fetchSingleEntity("vehicles", vehicleId)) as IVehicle;

  if (!vehicle) notFound();

  return (
    <Details name={vehicle.name}>
      <SingleValueRow title='Model' value={vehicle.model} />
      <SingleValueRow title='Manufacturer' value={vehicle.manufacturer} />
      <SingleValueRow title='Cost' value={vehicle.cost_in_credits + " Cr."} />
      <SingleValueRow title='Length' value={vehicle.length} />
      <SingleValueRow
        title='Max Speed'
        value={vehicle.max_atmosphering_speed}
      />
      <SingleValueRow title='Crew' value={vehicle.crew} />
      <SingleValueRow title='Passengers' value={vehicle.passengers} />
      <SingleValueRow title='Cargo Capacity' value={vehicle.cargo_capacity} />
      <SingleValueRow title='Consumables' value={vehicle.consumables} />
      <SingleValueRow title='Class' value={vehicle.vehicle_class} />
      <MultipleValueRow title='pilots' urls={vehicle.pilots} route='people' />
      <MultipleValueRow title='Films' urls={vehicle.films} route='films' />
    </Details>
  );
}
