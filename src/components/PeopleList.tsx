"use client";

import { useEffect, useState } from "react";
import { IPeopleAPIResponse, IPerson } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { fetchPeople } from "@/lib/actions";
import Person from "./Person";
import Image from "next/image";

type PeopleListProps = {
  initialPeople: IPeopleAPIResponse;
};

export default function PeopleList({ initialPeople }: PeopleListProps) {
  const [people, setPeople] = useState<IPerson[]>(initialPeople.results);
  const [nextUrl, setNextUrl] = useState<string | null>(initialPeople.next);
  const { ref, inView } = useInView();

  const loadMorePeople = async () => {
    if (!nextUrl) return;
    const morePeople = await fetchPeople(nextUrl);
    setPeople((people) => [...people, ...morePeople.results]);
    setNextUrl(morePeople.next);
  };

  useEffect(() => {
    if (inView) {
      loadMorePeople();
    }
  }, [inView]);

  return (
    <div className="p-8 pt-0">
      <h1 className="text-3xl text-center font-distant-galaxy tracking-wider space-x-2 my-8">People</h1>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {people.map((person) => (
          <Person person={person} key={person.url} />
        ))}
      </ul>

      {/* Loading Section */}
      <div ref={ref} className={`${!nextUrl ? "hidden" : "flex flex-col items-center gap-1 my-4"}`}>
        <Image src="/icons/yoda.svg" alt="Loading" width={100} height={100} className="animate-pulse" />
        <p className="font-anakinmono text-sm text-center py-2 text-sw-green capitalize animate-pulse">Patience you must have<br></br>my young Padawan...</p>
      </div>
    </div>
  );
}
