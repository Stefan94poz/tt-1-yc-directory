"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { fetcher, queryStartups } from "@/lib/utils";
import { Startup } from "@/payload-types";
import StartupCard from "./StartupCard";
import useSWR from "swr";

function GetStartups() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || null;

  const { data: startups, isLoading } = useSWR(
    `/api/startups${queryStartups(query)}`,
    fetcher
  );

  console.log("startups", startups);
  return (
    <ul className="mt-7 card_grid">
      {startups?.length > 0 ? (
        startups.map((startup: Startup, index: number) => (
          <StartupCard key={index} post={startup} />
        ))
      ) : (
        <p className="no-results">{isLoading ? "Loading..." : "No results"}</p>
      )}
    </ul>
  );
}

export default GetStartups;
