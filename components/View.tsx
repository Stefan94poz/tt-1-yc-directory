import React from "react";
import Ping from "./Ping";
import { after } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";

async function View({ id }: { id: string }) {
  // ?select[views]=true
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.findByID({
    id: id,
    collection: "startups",
    select: { views: true },
  });

  after(async () => {
    await payload.update({
      id: id,
      collection: "startups",
      data: {
        views: (data?.views as number) + 1,
      },
    });
  });

  const { views } = data || {};

  return (
    <div className="view-container">
      <div className="absolute -top-2 right">
        <Ping />
      </div>
      <div className="view-text">
        <span className="font-black">{views}</span>
      </div>
    </div>
  );
}

export default View;
