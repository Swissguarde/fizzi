import { View } from "@react-three/drei";
import Scene from "./sky-dive-scene";

interface Props {
  skyDiveData: {
    title: string;
  };
}

export default function SkyDive({ skyDiveData }: Props) {
  const { title } = skyDiveData;
  return (
    <section className="skydive h-screen px-4 first:pt-10 md:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        <h2 className="sr-only">screen readers text here</h2>
        <View className="h-screen w-screen">
          <Scene flavor="blackCherry" sentence={title} />
        </View>
      </div>
    </section>
  );
}
