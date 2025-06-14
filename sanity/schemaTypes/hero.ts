import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Sub-Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
        }),
        defineField({
          name: "link",
          title: "Link URL",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "secondaryHeading",
      title: "Secondary Heading",
      type: "string",
    }),

    defineField({
      name: "secondaryDescription",
      title: "Secondary Description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "subheading",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Hero",
        subtitle: subtitle || "No subheading",
      };
    },
  },
});
