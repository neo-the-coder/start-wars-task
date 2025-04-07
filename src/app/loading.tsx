import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-2 my-4 mt-20">
      <Image
        src="/icons/yoda.svg"
        alt="Loading"
        width={120}
        height={120}
        className="animate-pulse md:w-[240px] md:h-[240px]"
      />
      <p className="font-star-jedi-outline text-xs md:text-base text-center py-2 text-sw-green capitalize animate-pulse">
        Patience you must have<br></br>my young Padawan...
      </p>
    </div>
  );
}
