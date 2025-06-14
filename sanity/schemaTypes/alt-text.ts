import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const altText = defineType({
  name: "alt-text",
  title: "Alt Text Array",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "altTexts",
      title: "Alt Texts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "altTexts.0.title",
    },
    prepare({ title }) {
      return {
        title: title || "Alt Text Array",
      };
    },
  },
});
