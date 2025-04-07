import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-1 my-4">
      <Image
        src="/icons/yoda.svg"
        alt="Loading"
        width={100}
        height={100}
        className="animate-pulse"
      />
      <p className="font-anakinmono text-sm text-center py-2 text-sw-green capitalize animate-pulse">
        Patience you must have<br></br>my young Padawan...
      </p>
    </div>
  );
}
