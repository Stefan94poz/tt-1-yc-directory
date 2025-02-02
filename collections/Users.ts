import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    create: () => true,
    read: () => true,
  },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["fullName", "email"],
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    { name: "fullName", type: "text" },
    { name: "password", type: "text", required: false },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "profileImage", type: "text" },
    {
      name: "Startups",
      type: "join",
      on: "author",
      collection: "startups",
    },
  ],
};
