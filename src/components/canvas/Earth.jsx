import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial, Html } from "@react-three/drei";

const Earth = () => {
    return (
        <group>
            {/* Main Globe */}
            <mesh>
                <sphereGeometry args={[2.5, 64, 64]} />
                <meshStandardMaterial
                    color="#1a1a40" // Darker blue/purple
                    roughness={0.7}
                    metalness={0.5}
                />
            </mesh>

            {/* Wireframe Overlay */}
            <mesh>
                <sphereGeometry args={[2.52, 64, 64]} />
                <meshStandardMaterial
                    color="#00F0FF"
                    wireframe
                    transparent
                    opacity={0.15}
                />
            </mesh>

            {/* Atmosphere Glow */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[2.5, 64, 64]} />
                <meshBasicMaterial
                    color="#00F0FF"
                    transparent
                    opacity={0.05}
                    side={2} // DoubleSide
                />
            </mesh>

            {/* Location Marker (Arbitrary position for abstract globe) */}
            <group rotation={[0.5, 2, 0]}> {/* Rotate to bring marker into view */}
                <mesh position={[2.55, 0, 0]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
                    <Html distanceFactor={10}>
                        <div className="bg-black/80 p-2 rounded-lg border border-[#00F0FF] text-white text-xs whitespace-nowrap">
                            Jabalpur, MP
                        </div>
                    </Html>
                </mesh>
                {/* Pulse Effect Ring */}
                <mesh position={[2.55, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                    <ringGeometry args={[0.15, 0.2, 32]} />
                    <meshBasicMaterial color="#ff0000" transparent opacity={0.5} side={2} />
                </mesh>
            </group>
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} color="#00F0FF" />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
