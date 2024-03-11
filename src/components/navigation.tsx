"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/library/utils";
import Image from "next/image";

const config = [
  { id: 1, name: "Pricing", route: "/pricing" },
  { id: 2, name: "Contact", route: "/contact" },
];

export default function Navigation() {
  const [isPageOnTop, setIsPageOnTop] = useState(true);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setIsPageOnTop(false);
    } else {
      setIsPageOnTop(true);
    }
  });
  return (
    <nav
      className={cn([
        "sticky top-0 flex items-center justify-between px-12 py-5",
        !isPageOnTop && `bg-white shadow-sm transition delay-300 ease-in-out`,
      ])}
    >
      <Link
        className="flex items-center justify-between gap-2 text-xl font-semibold text-blue-500"
        href="/"
      >
        {/* Logo */}

        <Image src={"public/logo.svg"} alt="logo" unoptimized />
        <span>Logo</span>
      </Link>
      <div className="flex-grow"></div> {/* This creates the gap */}
      <div className="space-x-4">
        {config.map((element) => (
          <Link
            key={element.id}
            className="text-gray-600 hover:text-gray-900"
            href={element.route}
          >
            {element.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
