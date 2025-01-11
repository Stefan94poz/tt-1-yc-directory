import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    create: () => true,
    read: () => true,
  },
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    { name: "fullName", type: "text" },
    // {
    //   name: "startups",
    //   type: "join",
    //   on: "startups",
    //   collection: "author",
    // },
  ],
};
