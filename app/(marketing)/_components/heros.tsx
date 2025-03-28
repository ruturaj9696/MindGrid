import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 pb-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/file.svg"
            alt="Picture of the author"
            className="object-contain"
            fill
          />
        </div>
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] hidden md:block">
          <Image
            src="/file.svg"
            alt="Picture of the author"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};