import React from "react";
import {TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-t from-green-500 via-emerald-400 to-lime-400">
      <div className="lg:max-w-2xl mx-auto py-6 px-2 max-w-[90%] sm:max-w-[80%]">
        <h1 className="text-white drop-shadow text-4xl font-bold text-center mb-4">Where to ?</h1>
        <div className="flex text-white drop-shadow lg:text-xl sm:text-lg text-base font-semibold text-center justify-between gap-3 mb-3">
          <p>Search All</p>
          <p>Hotels</p>
          <p>Things to Do</p>
          <p>Restaurants</p>
          <p>Vacation Rentals</p>
        </div>
        <TextInput id="search" type="text" rightIcon={FaSearch} placeholder="Place to go, things to do, hotels..." required />
      </div>
    </div>
  );
}
