"use client";
import React, { useEffect } from "react";
import Ping from "./Ping";
import useSWR from "swr";
import { Skeleton } from "./ui/skeleton";

function View({ id }: { id: string }) {
  // ?select[views]=true
  const fetcher = (url: string) =>
    fetch(url).then((r) => r.json());

  const { data, isLoading, mutate } = useSWR(
    `/api/startups/${id}?select[views]=true`,
    fetcher,
  );

  const { views } = data || {};

  useEffect(() => {
    const updateViews = async () => {
      try {
        await fetch(`/api/startups/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            views: views + 1, // Payload CMS supports the "increment" operator
          }),
        });
      } catch (error) {
        console.error(error);
      }
    };

    updateViews();
    mutate();
  }, [id, mutate, views]);

  return (
    <div className="view-container">
      <div className="absolute -top-2 right">
        <Ping />
      </div>
      <div className="view-text">
        <span className="font-black">
          {isLoading ? (
            <Skeleton className="view_skeleton" />
          ) : (
            views
          )}
        </span>
      </div>
    </div>
  );
}

export default View;
