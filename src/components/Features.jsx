import React from 'react'
import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";

const Features = () => {
    return (
        <section id='features'>
            <h2>See it all in a new light.</h2>

            <Canvas id='f-canvas' camera={{}}>
                <StudioLights/>
                <ambientLight intensity={0.5}/>
                {/*3D MODEL */}
            </Canvas>
        </section>
    )
}
export default Features
