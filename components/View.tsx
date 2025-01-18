import React from "react";
import Ping from "./Ping";
import { getPayload } from "payload";
import config from "@payload-config";

async function View({ id }: { id: string }) {
  const payload = await getPayload({ config });
  const views = await payload
    .findByID({
      collection: "startups",
      id: id,

      select: {
        views: true,
      },
    })
    .then((res) => res.views);

  console.log("views", views);
  return (
    <div className="view-container">
      <div className="absolute -top-2-right02">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">{views}</span>
      </p>
    </div>
  );
}

export default View;
