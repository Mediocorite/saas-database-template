import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type ButtonVariant =
  | "link"
  | "default"
  | "outline"
  | "destructive"
  | "secondary"
  | "ghost"
  | null
  | undefined;

// Define the structure of objects within heroButtons
interface HeroButton {
  id: number;
  name: string;
  route: string;
  variant: ButtonVariant; // Use the ButtonVariant type for variant
}

// Define the structure of the config object
interface Config {
  heroTitle: string;
  heroDescription: string;
  heroButtons: HeroButton[];
}

const config: Config = {
  heroTitle: "Lorem ipsum dolor sit amet",
  heroDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium quas illo quisquam ratione incidunt libero.",
  heroButtons: [
    {
      id: 1,
      name: "Start a Free trial",
      route: "/pricing",
      variant: "default",
    },
    {
      id: 2,
      name: "Contact us for Info",
      route: "/contact",
      variant: "outline",
    },
  ],
};

export default function LeadHero() {
  return (
    <section className="flex  flex-col items-center justify-center px-40 pt-28 text-center leading-tight">
      <h1 className="text-7xl font-bold">{config.heroTitle}</h1>
      <span className="mb-7 mt-3 px-7 text-lg">{config.heroDescription}</span>
      <div className="flex gap-7 p-3">
        {config.heroButtons.map((element) => (
          <Button
            key={element.id}
            size={"lg"}
            asChild
            variant={element.variant}
          >
            <Link href={element.route}>{element.name}</Link>
          </Button>
        ))}
      </div>
    </section>
  );
}
