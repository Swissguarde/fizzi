"use client";

import { View } from "@react-three/drei";
import AltTextScene from "./scene";
import clsx from "clsx";
import { Container } from "../container";

interface Props {
  altTextData: {
    altTexts: {
      title: string;
      description: string;
    }[];
  };
}

export default function AlternatingText({ altTextData }: Props) {
  const { altTexts } = altTextData;
  return (
    <Container className="alternating-text-container relative bg-yellow-300 text-sky-950">
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute top-0 left-0 h-screen w-full">
            <AltTextScene />
          </View>

          {altTexts.map((item, index) => (
            <div
              key={index}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-6xl font-bold text-balance">
                  {item.title}
                </h2>
                <div className="mt-4 text-xl">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
