import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const skyDive = defineType({
  name: "sky-dive",
  title: "Sky Dive Section",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Sky Dive Section",
      };
    },
  },
});
