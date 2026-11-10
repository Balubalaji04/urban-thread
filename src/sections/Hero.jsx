import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'

function FabricOrb() {
  const mesh = useRef()
  useFrame((state, delta) => { if (mesh.current) { mesh.current.rotation.y += delta * .16; mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * .3) * .12 } })
  return <Float speed={1.2} rotationIntensity={.25} floatIntensity={.45}>
    <mesh ref={mesh} scale={1.55}><icosahedronGeometry args={[1, 5]}/><MeshDistortMaterial color="#d91e49" roughness={.72} metalness={.08} distort={.28} speed={1.5}/></mesh>
  </Float>
}
function Product3D() {
  return <Canvas camera={{position:[0,0,5], fov:42}} dpr={[1,1.5]} gl={{alpha:true, antialias:true}}>
    <ambientLight intensity={1.3}/><directionalLight position={[3,4,5]} intensity={2}/><pointLight position={[-3,-2,2]} color="#ff8aa1" intensity={2}/>
    <Suspense fallback={null}><FabricOrb/><Environment preset="studio"/></Suspense>
  </Canvas>
}
export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress,[0,.28],[0,100])
  const rotate = useTransform(scrollYProgress,[0,.3],[0,18])
  return <section className="hero-section" id="top">
    <div className="hero-grid-bg"/><div className="hero-glow"/>
    <div className="hero-content">
      <Reveal><p className="eyebrow light-eyebrow"><span/> THE EVERYDAY UNIFORM / DROP 01</p></Reveal>
      <motion.h1 style={{y}}>WEAR YOUR<br/><span>ENERGY.</span></motion.h1>
      <div className="hero-bottom">
        <Reveal delay={.15}><p>Not here to fit in.<br/>Here to feel like you.</p><a href="#new-drop" className="circle-link">EXPLORE DROP <ArrowUpRight size={17}/></a></Reveal>
        <motion.div className="hero-3d" style={{rotate}}><div className="desktop-3d"><Product3D/></div><img className="mobile-hero-product" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=85" alt="Black heavyweight cotton t-shirt"/></motion.div>
        <div className="hero-index"><span>01 — 06</span><span>SCROLL TO EXPLORE <ArrowDown size={14}/></span></div>
      </div>
    </div>
    <div className="hero-side-note">INDEPENDENT STYLE. EVERYDAY COMFORT.</div>
  </section>
}
