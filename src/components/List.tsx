"use client";

import { useEffect, useState } from "react";
import { IEntityUnion, IAPIResponseUnion, routesUnion } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Loading from "@/app/loading";

type ListProps = {
  initialEntities: IAPIResponseUnion;
  fetchFunction: (url: string) => Promise<IAPIResponseUnion>;
  route: routesUnion;
};

export default function List({
  initialEntities,
  fetchFunction,
  route,
}: ListProps) {
  const [entities, setEntities] = useState<IEntityUnion[]>(
    initialEntities.results,
  );
  const [nextUrl, setNextUrl] = useState<string | null>(initialEntities.next);
  const { ref, inView } = useInView();

  useEffect(() => {
    const loadMoreEntities = async () => {
      if (!nextUrl) return;
      const moreEntities = await fetchFunction(nextUrl);
      setEntities((entities) => [...entities, ...moreEntities.results]);
      setNextUrl(moreEntities.next);
    };
    if (inView) {
      loadMoreEntities();
    }
  }, [fetchFunction, inView, nextUrl]);

  return (
    <div className='mx-auto max-w-7xl p-8 pt-0'>
      <h1 className='font-distant-galaxy my-8 space-x-2 text-center text-3xl tracking-wider capitalize'>
        {route}
      </h1>

      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {entities.map((entity) => (
          <Card
            name={"title" in entity ? entity.title : entity.name}
            data={entity}
            route={route}
            key={entity.url}
          />
        ))}
      </ul>

      {/* Loading Section */}
      <div className={!nextUrl ? "hidden" : ""} ref={ref}>
        <Loading />
      </div>
    </div>
  );
}
