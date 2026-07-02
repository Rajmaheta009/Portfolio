import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FloatingOrb() {

  const mesh = useRef();

  useFrame((state) => {

    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.004;

    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.3;

  });

  return (

    <mesh ref={mesh}>

      <icosahedronGeometry args={[2, 5]} />

      <MeshDistortMaterial
        color="#00D9FF"
        distort={0.45}
        speed={2}
        roughness={0}
      />

    </mesh>

  );

}