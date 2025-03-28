"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 font-bold text-center mx-auto">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, and Plans Welcome to
        <span className="underline"> MindGrid</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        MindGrid is the connected workspace <br /> where better, faster work
        happens
      </h3>
      <div className="flex justify-center">
        <Button>
          Get Started
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};