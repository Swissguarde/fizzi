import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { skyDive } from "./sky-dive";
import { altText } from "./alt-text";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, skyDive, altText],
};
