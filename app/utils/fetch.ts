import { client } from "@/sanity/lib/client";

export const fetchHeroData = async () => {
  try {
    const heroData = await client.fetch('*[_type == "hero"][0]');
    return heroData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchSkyDiveData = async () => {
  try {
    const skyDiveData = await client.fetch('*[_type == "sky-dive"][0]');
    return skyDiveData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchAltTextData = async () => {
  try {
    const altTextData = await client.fetch('*[_type == "alt-text"][0]');
    return altTextData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
