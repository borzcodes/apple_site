import React, {useRef} from 'react'
import {PresentationControls} from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import gsap from "gsap";

const ANIMATION_DURATION = 1;
const OFFSETDISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration : ANIMATION_DURATION});
        }
    })
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar:[-Math.PI / Math.PI],
        azimuth:[-Infinity,Infinity],
        config: {mass:1, tension:0, friction:26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher
