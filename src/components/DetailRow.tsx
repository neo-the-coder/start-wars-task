import { extractId } from "@/lib/utils";
import Link from "next/link";

type SingleValueRowProps = {
  title: string;
  value: string;
};

type MultipleValueRowProps = {
  title: string;
  urls: string[];
  route: string;
};

export function SingleValueRow({ title, value }: SingleValueRowProps) {
  return (
    <li className='flex justify-between gap-x-4'>
      <span className='uppercase'>{title}:</span>
      <span className='text-primary text-end'>{value}</span>
    </li>
  );
}

export function MultipleValueRow({
  title,
  urls,
  route,
}: MultipleValueRowProps) {
  const ids = urls.map((url) => extractId(url));
  return (
    <li className='flex justify-between gap-x-4'>
      <span className='uppercase'>{title}:</span>
      {ids.length ? (
        <div className='flex flex-wrap items-center justify-end gap-2'>
          {ids.map((id) => (
            <Link
              key={id}
              href={`/${route}/${id}`}
              className='text-primary hover:text-vivid-orange uppercase transition-colors ease-out hover:underline'
            >
              {id}
            </Link>
          ))}
        </div>
      ) : (
        <span className='text-primary'>n/a</span>
      )}
    </li>
  );
}
