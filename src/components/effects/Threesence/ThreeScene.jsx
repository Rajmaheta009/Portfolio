import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import FloatingOrb from "./FloatingOrb";
import Lights from "./Lights";

export default function ThreeScene(){

    return(

        <Canvas
        camera={{
            position:[0,0,7],
            fov:50
        }}
        >

            <Lights/>

            <FloatingOrb/>

            <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1}
            />

        </Canvas>

    )

}