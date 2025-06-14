import { View } from "@react-three/drei";
import { Container } from "./container";
import Scene from "./sky-dive-scene";

interface Props {
  skyDiveData: {
    title: string;
  };
}

export default function SkyDive({ skyDiveData }: Props) {
  const { title } = skyDiveData;
  return (
    <Container className="skydive h-screen">
      <h2 className="sr-only">screen readers text here</h2>
      <View className="h-screen w-screen">
        <Scene flavor="blackCherry" sentence={title} />
      </View>
    </Container>
  );
}
