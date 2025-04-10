// components/ThreeDModel.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function FloatingShape() {
  const mesh = useRef()
  
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.005
  })

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        transparent 
        opacity={0.6} 
        wireframe={false}
      />
    </mesh>
  )
}

export default function ThreeDModel() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FloatingShape />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-400/10"></div>
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10 dark:opacity-5"></div>
    </div>
  )
}