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
      <div className="min-h-[200px] bg-black p-4 border-4 border-vivid-orange shadow-md rounded-md hover:bg-gray-600 transition font-distant-galaxy h-full">
        <h2 className="font-sterilict max-sm:text-xl text-center tracking-wider text-vivid-orange font-normal mb-8 lowercase">
          {name}
        </h2>
        <ul className="font-sans tracking-wider">
          {details.map(({ detailTitle, detailProp }) => {
            const value = formattedValue(
              (data[detailProp as keyof IEntityUnion]).toString(),
              detailProp
            );

            return <SingleValueRow title={detailTitle} value={value} key={detailProp} />;
          })}
        </ul>
      </div>
    </Link>
  );
}
