import Box from "@/components/MyThree/Box";
import { Canvas } from "@react-three/fiber";
const Three = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Three;
