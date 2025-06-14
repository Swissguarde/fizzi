"use client";
import { View } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bubbles } from "./bubbles";
import { Container } from "./container";
import Scene from "./scene";
import CustomButton from "./custom-button";
import { TextSplitter } from "./text-split";
import Image from "next/image";
import { useMediaQuery } from "../hooks/use-media-query";
import { useStore } from "../hooks/use-store";
import SkyDive from "./sky-dive";
import Carousel from "./carousel/carousel";
import AlternatingText from "./alt-text/alternating-text";
import HugeText from "./huge-text/huge-text";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  heroData: {
    heading: string;
    subheading: string;
    description: string;
    cta: {
      link: string;
      text: string;
    };
    secondaryHeading: string;
    secondaryDescription: string;
  };
  skyDiveData: {
    title: string;
  };
  altTextData: {
    altTexts: {
      title: string;
      description: string;
    }[];
  };
}

export default function Hero({ heroData, skyDiveData, altTextData }: Props) {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const {
    heading,
    subheading,
    description,
    cta: { link, text },
    secondaryHeading,
    secondaryDescription,
  } = heroData;

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          { backgroundColor: "#FDE047" },
          { backgroundColor: "#D9F99D", overwrite: "auto" },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <>
      <Container className="hero opacity-0">
        {isDesktop && (
          <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
            <Scene />
            <Bubbles count={300} speed={2} repeat={true} />
          </View>
        )}
        <div className="grid">
          <div className="grid h-screen place-items-center">
            <div className="grid auto-rows-min place-items-center text-center">
              <h2 className="hero-header text-7xl leading-[0.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
                <TextSplitter
                  text={heading}
                  wordDisplayStyle="block"
                  className="hero-header-word"
                />
              </h2>
              <h3 className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
                {subheading}
              </h3>
              <p className="hero-body text-2xl font-normal text-sky-950">
                {description}
              </p>
              <CustomButton
                buttonLink={link}
                buttonText={text}
                className="hero-button mt-12"
              />
            </div>
          </div>
          <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
            <Image
              src="/images/all-cans-bunched.png"
              alt="Soda_Image"
              width={500}
              height={500}
              className="w-full md:hidden"
            />
            <div>
              <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
                <TextSplitter text={secondaryHeading} />
              </h2>
              <div className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance text-sky-950">
                <p>{secondaryDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SkyDive skyDiveData={skyDiveData} />
      <Carousel />
      <AlternatingText altTextData={altTextData} />
      <HugeText />
    </>
  );
}
