import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import {
  fetchAltTextData,
  fetchHeroData,
  fetchSkyDiveData,
} from "./utils/fetch";

export default async function Home() {
  const heroData = await fetchHeroData();
  const skyDiveData = await fetchSkyDiveData();
  const altTextData = await fetchAltTextData();

  return (
    <div>
      <Header />
      <Hero
        heroData={heroData}
        skyDiveData={skyDiveData}
        altTextData={altTextData}
      />

      <Footer />
    </div>
  );
}
