import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Terminal } from './Terminal';

function FloatingOrb({ position, color, speed, scale = 1 }: { position: [number, number, number], color: string, speed: number, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.8;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.003;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[scale, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      <pointLight position={[0, 0, 10]} intensity={1.5} color="#00ffff" />
      <spotLight position={[0, 10, 0]} intensity={1} color="#ff00ff" angle={0.3} penumbra={1} />
      
      <FloatingOrb position={[-4, 0, -3]} color="#00ffff" speed={0.5} scale={1.2} />
      <FloatingOrb position={[4, 1, -4]} color="#ff00ff" speed={0.7} scale={1} />
      <FloatingOrb position={[0, -2, -2]} color="#ff00aa" speed={0.6} scale={0.8} />
      <FloatingOrb position={[-2, 2, -5]} color="#00ffff" speed={0.4} scale={0.9} />
      <FloatingOrb position={[2, -1, -3]} color="#aa00ff" speed={0.8} scale={1.1} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
}

export const Hero3D = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 z-10" />

      {/* Scan lines effect */}
      <div className="absolute inset-0 scan-lines z-10 opacity-30" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <div className="glass-effect px-4 py-2 rounded-full border border-primary/50">
              <span className="terminal-text text-sm font-fira">
                &gt; SYSTEM STATUS: ONLINE
              </span>
            </div>
          </motion.div>

          {/* Main title with glitch effect */}
          <div className="relative">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-orbitron mb-6"
              data-text="Hi, I'm Syed Huzaifa Ali"
            >
              <span className="block mb-2 text-muted-foreground text-2xl md:text-3xl">
                Hi, I'm
              </span>
              <span className="block glow-text glitch" data-text="SYED HUZAIFA ALI">
                SYED HUZAIFA ALI
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="inline-block neon-box">
              <div className="neon-box-inner">
                <p className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-bold text-primary">
                  Digital Forensics & Cyber Security Enthusiast
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto font-rajdhani">
              Building secure, intelligent, and future-ready digital systems
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#about" 
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold font-rajdhani glow-border hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE PROFILE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 glass-effect-strong rounded-lg font-semibold font-rajdhani border-2 border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              CONTACT ME
            </a>

            <button
              onClick={() => setShowTerminal(true)}
              className="px-6 py-4 glass-effect rounded-lg font-semibold font-rajdhani border border-accent/50 hover:border-accent hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <TerminalIcon className="w-5 h-5" />
              <span>OPEN TERMINAL</span>
            </button>
          </motion.div>

          {/* Tech stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 pt-12"
          >
            {[
              { label: 'Security Level', value: 'MAXIMUM' },
              { label: 'Status', value: 'ACTIVE' },
              { label: 'Response Time', value: '<1ms' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-orbitron glow-text-secondary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-fira mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced animated particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Corner UI elements */}
      <div className="absolute top-8 left-8 z-20 hidden md:block">
        <div className="glass-effect px-4 py-2 rounded border border-primary/30">
          <span className="terminal-text text-xs font-fira">v1.0.0</span>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="glass-effect px-4 py-2 rounded border border-secondary/30">
          <span className="terminal-text text-xs font-fira">SECURE</span>
        </div>
      </div>

      {/* Terminal overlay */}
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </section>
  );
};
