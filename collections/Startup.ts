import type { CollectionConfig } from "payload";

export const Startups: CollectionConfig = {
  slug: "startups",
  //   admin: {
  //     useAsTitle: "startup",
  //   },
  // TODO: find out how making collections works, youtube video
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    // {
    //   name: "author",
    //   type: "relationship",
    //   relationTo: "users",
    // },
    {
      name: "views",
      type: "number",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
  ],
};
