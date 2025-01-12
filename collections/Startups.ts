import type { CollectionConfig } from "payload";

export const Startups: CollectionConfig = {
  slug: "startups",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  // defaultPopulate: {
  //   title: true,
  //   slug: true,
  //   categories: true,
  //   meta: {
  //     image: true,
  //     description: true,
  //   },
  // },

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
      hasMany: false,
    },
    {
      name: "views",
      type: "number",
      required: false,
      defaultValue: 0,
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

    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
