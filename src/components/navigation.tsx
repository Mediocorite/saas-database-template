import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4">
      <Link className="text-lg font-semibold text-blue-500" href="/">
        Logo
      </Link>
      <div className="flex-grow"></div> {/* This creates the gap */}
      <div className="space-x-4">
        <Link className="text-gray-600 hover:text-gray-900" href="/pricing">
          Pricing
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
