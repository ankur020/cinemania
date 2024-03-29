"use client";
import React from "react";
import NavbarItem from "./NavbarItem";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4">
      <Suspense>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
