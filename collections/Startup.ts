import type { CollectionConfig } from "payload";

export const Startup: CollectionConfig = {
  slug: "startup",
  //   admin: {
  //     useAsTitle: "startup",
  //   },
  // TODO: find out how making collections works, youtube video
  fields: [
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "_createdAt",
      type: "date",
      required: true,
    },
    {
      name: "views",
      type: "number",
      required: true,
    },
  ],
};
