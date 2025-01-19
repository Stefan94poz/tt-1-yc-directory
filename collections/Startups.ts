import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const Startups: CollectionConfig = {
  slug: "startups",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    update: () => true,
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
      custom: ["email", "fullName"],
      required: true,
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
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({
              enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
            }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ];
        },
      }),
      label: false,
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
