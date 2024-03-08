"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/library/utils";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
          />
        </svg>
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
