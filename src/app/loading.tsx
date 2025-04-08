import Image from "next/image";

export default function Loading() {
  return (
    <div className='my-4 mt-20 flex flex-col items-center gap-2'>
      <Image
        src='/icons/yoda.svg'
        alt='Loading'
        width={120}
        height={120}
        className='animate-pulse md:h-[240px] md:w-[240px]'
      />
      <p className='font-star-jedi-outline text-sw-green animate-pulse py-2 text-center text-xs capitalize md:text-base'>
        Patience you must have<br></br>my young Padawan...
      </p>
    </div>
  );
}
