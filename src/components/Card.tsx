import { IEntityUnion, routesUnion } from "@/lib/types";
import { extractId, formattedValue, shownDetails } from "@/lib/utils";
import Link from "next/link";
import { SingleValueRow } from "./DetailRow";

type CardProps = {
  name: string;
  data: IEntityUnion;
  route: routesUnion;
};

export default function Card({
  name,
  data,
  route,
}: CardProps): React.ReactNode {
  const id = extractId(data.url);
  const details = shownDetails[route];
  return (
    <Link href={`/${route}/${id}`}>
      <div className='border-vivid-orange font-distant-galaxy h-full min-h-[200px] rounded-md border-4 bg-black/60 p-4 shadow-md transition hover:bg-gray-600'>
        <h2 className='font-sterilict text-vivid-orange mb-8 text-center font-normal tracking-wider lowercase max-sm:text-xl'>
          {name}
        </h2>
        <ul className='font-sans tracking-wider'>
          {details.map(({ detailTitle, detailProp }) => {
            const value = formattedValue(
              data[detailProp as keyof IEntityUnion].toString(),
              detailProp,
            );

            return (
              <SingleValueRow
                title={detailTitle}
                value={value}
                key={detailProp}
              />
            );
          })}
        </ul>
      </div>
    </Link>
  );
}
