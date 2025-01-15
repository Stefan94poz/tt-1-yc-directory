"use client";
import React from "react";
import StartupCard from "./StartupCard";
import { Startup } from "@/payload-types";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((r) => r.json().then((data) => data.docs));

function GetStartups({ searchParams }: string) {
  // TODO: Create query that updates when db updates
  const { data: startups } = useSWR("/api/startups", fetcher);
  console.log("searchParams", searchParams);
  const data = startups;
  return (
    <ul className="mt-7 card_grid">
      {data?.length > 0 ? (
        data.map((startup: Startup, index: number) => (
          <StartupCard key={index} post={startup} />
        ))
      ) : (
        <p className="no-results">No startups found</p>
      )}
    </ul>
  );
}

export default GetStartups;
