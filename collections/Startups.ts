import type { CollectionConfig } from "payload";

export const Startups: CollectionConfig = {
  slug: "startups",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "views",
      type: "number",
      required: false,
      hidden: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};
