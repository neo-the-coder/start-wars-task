// app/people/page.tsx
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

type Person = {
  name: string;
  height: string;
  gender: string;
  birth_year: string;
  url: string;
};

const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>('https://swapi.dev/api/people/');
  const loader = useRef(null);

  const fetchPeople = useCallback(async () => {
    if (!nextUrl) return;
    const res = await fetch(nextUrl);
    const data = await res.json();
    setPeople(prev => [...prev, ...data.results]);
    setNextUrl(data.next);
  }, [nextUrl]);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchPeople();
      },
      { threshold: 1.0 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [fetchPeople]);

  const extractId = (url: string) => url.split('/').filter(Boolean).pop();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {people.map((person) => {
          const id = extractId(person.url);
          return (
            <Link href={`/people/${id}`} key={id}>
              <div className="bg-gray-800 p-4 rounded-xl shadow-md hover:bg-gray-700 transition">
                <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
                <p>Height: {person.height} cm</p>
                <p>Gender: {person.gender}</p>
                <p>Birth Year: {person.birth_year}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div ref={loader} className="h-10 mt-10 text-center">
        {nextUrl ? 'Loading more...' : 'No more characters.'}
      </div>
    </div>
  );
};

export default PeoplePage;
