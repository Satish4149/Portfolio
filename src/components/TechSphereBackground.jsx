// // components/TechSphereBackground.jsx
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Points, PointMaterial } from '@react-three/drei'
// import * as random from 'maath/random/dist/maath-random.esm'
// import { useRef, Suspense } from 'react'

// function FloatingTechSphere() {
//   const sphereRef = useRef()
//   const particlesRef = useRef()
  
//   // Generate random particles
//   const particles = random.inSphere(new Float32Array(2000), { radius: 2 })
  
//   useFrame((state, delta) => {
//     sphereRef.current.rotation.y -= delta * 0.1
//     particlesRef.current.rotation.y += delta * 0.05
//   })

//   return (
//     <>
//       {/* Main tech sphere */}
//       <mesh ref={sphereRef}>
//         <icosahedronGeometry args={[1.5, 2]} />
//         <meshStandardMaterial 
//           color="#3b82f6" 
//           wireframe 
//           transparent 
//           opacity={0.8}
//           emissive="#3b82f6"
//           emissiveIntensity={0.5}
//         />
//       </mesh>
      
//       {/* Floating particles */}
//       <Points ref={particlesRef} positions={particles} stride={3} frustumCulled={false}>
//         <PointMaterial
//           transparent
//           color="#60a5fa"
//           size={0.015}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </>
//   )
// }

// export default function TechSphereBackground() {
//   return (
//     <div className="absolute inset-0 z-0">
//       <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={0.5} />
//         <Suspense fallback={null}>
//           <FloatingTechSphere />
//         </Suspense>
//       </Canvas>
      
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-400/10"></div>
      
//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
//     </div>
//   )
// } 