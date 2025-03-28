"use client";
import { Footer } from "./(marketing)/_components/footer";
import { Heading } from "./(marketing)/_components/heading";
import { Heros } from "./(marketing)/_components/heros";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center text-center px-6 pb-10">
      <Heading />
      <Heros />
      <Footer />
    </div>
  );
}
