"use client";
import React from "react";
import StartupCard from "./StartupCard";
import { Startup } from "@/payload-types";

function GetStartups({ startups }: { startups: Startup[] }) {
  return (
    <ul className="mt-7 card_grid">
      {startups?.length > 0 ? (
        startups.map((startup: Startup, index: number) => (
          <StartupCard key={index} post={startup} />
        ))
      ) : (
        <p className="no-results">No startups found</p>
      )}
    </ul>
  );
}

export default GetStartups;
