import { Button } from "@/components/ui/button";
import Image from "next/image";
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

interface CustomerBranding {
  id: number;
  src: string;
  alt: string;
}

interface Config {
  heroTitle: string;
  heroDescription: string;
  heroButtons: HeroButton[];
  customerStories: string;
  customerBranding: CustomerBranding[];
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
  customerStories:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid mollitia ipsum cupiditate magnam harum voluptatum at explicabo sint ut.",
  customerBranding: [
    { id: 1, src: "/images/fake-brand-logo.png", alt: "fakeBrandName" },
    { id: 2, src: "/images/fake-brand-logo.png", alt: "fakeBrandName" },
    { id: 3, src: "/images/fake-brand-logo.png", alt: "fakeBrandName" },
    { id: 4, src: "/images/fake-brand-logo.png", alt: "fakeBrandName" },
    { id: 5, src: "/images/fake-brand-logo.png", alt: "fakeBrandName" },
  ],
};

export default function LeadHero() {
  return (
    <>
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
        <div className="flex items-center justify-center">
          <iframe
            src="./images/leadVideo.html"
            height={400}
            width={750}
          ></iframe>
        </div>
        <div className="my-10 flex items-center justify-center text-center text-lg font-semibold">
          {config.customerStories}
        </div>
        <div className="item-center mx-10 flex justify-between gap-7">
          {config.customerBranding.map((element) => (
            <Image
              key={element.id}
              src={element.src}
              alt={element.alt}
              width={100}
              height={100}
            />
          ))}
        </div>
        <div className="text-blue-500">{`Read our customer stories ->`}</div>
      </section>
    </>
  );
}
