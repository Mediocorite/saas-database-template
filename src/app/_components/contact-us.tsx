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

interface HeroButton {
  id: number;
  name: string;
  route: string;
  variant: ButtonVariant;
}

interface Config {
  heroButtons: HeroButton[];
}

const config: Config = {
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
export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-blue-200 p-11">
      <h1 className="pb-8 text-4xl font-extrabold">Get Started here</h1>
      <div className="">Sign up and contact us for details</div>
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
    </div>
  );
}
