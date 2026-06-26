'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AssetProps {
  src: string
  alt: string
  blendMode?: 'screen' | 'lighten' | 'color-dodge' | 'normal'
  opacity?: number
  fadeEdges?: boolean
  blur?: number
  parallaxDepth?: number
  floatingAnimation?: boolean
}

export function BlendedAsset({
  src,
  alt,
  blendMode = 'lighten',
  opacity = 1,
  fadeEdges = true,
  blur = 0,
  parallaxDepth = 0,
  floatingAnimation = false,
}: AssetProps) {
  const blendModes = {
    screen: 'mix-blend-screen',
    lighten: 'mix-blend-lighten',
    'color-dodge': 'mix-blend-color-dodge',
    normal: 'mix-blend-normal',
  }

  return (
    <motion.div
      animate={floatingAnimation ? { y: [-15, 15, -15] } : {}}
      transition={{
        duration: 8,
        repeat: floatingAnimation ? Infinity : 0,
        ease: 'easeInOut',
      }}
      style={{
        y: parallaxDepth ? 0 : undefined,
      }}
      className="relative w-full h-full"
    >
      {/* Gradient edge mask for soft blending */}
      {fadeEdges && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)
            `,
            zIndex: 1,
          }}
        />
      )}

      {/* Main asset */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${blendModes[blendMode]}`}
        style={{
          opacity,
          filter: blur ? `blur(${blur}px)` : undefined,
        }}
        loading="lazy"
      />

      {/* Gradient fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(37, 99, 235, 0.1) 0%,
              transparent 50%,
              rgba(6, 182, 212, 0.05) 100%
            )
          `,
        }}
      />
    </motion.div>
  )
}

// Hero-specific blended asset
export function HeroAsset({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <motion.div
      animate={{
        y: [-20, 20, -20],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="relative w-full h-full"
    >
      {/* Glow backdrop */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-10 bg-gradient-to-r from-primary/30 via-accent/20 to-highlight/30 rounded-3xl blur-3xl"
      />

      {/* Asset with blend */}
      <div className="relative z-10 overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover mix-blend-screen"
          style={{
            opacity: 0.9,
            filter: 'drop-shadow(0 0 30px rgba(37, 99, 235, 0.3))',
          }}
          loading="lazy"
        />

        {/* Soft edge fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(0,0,0,0.4) 100%
              )
            `,
          }}
        />
      </div>
    </motion.div>
  )
}

// Section background asset
export function SectionBackgroundAsset({
  src,
  alt,
  opacity = 0.3,
}: {
  src: string
  alt: string
  opacity?: number
}) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [opacity * 0.5, opacity, opacity * 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full object-cover mix-blend-multiply"
        loading="lazy"
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(11, 18, 32, 0.7) 0%,
              rgba(11, 18, 32, 0.5) 50%,
              rgba(11, 18, 32, 0.7) 100%
            )
          `,
        }}
      />
    </div>
  )
}

// Floating decorative elements
export function FloatingAsset({
  src,
  alt,
  duration = 6,
  distance = 30,
  delay = 0,
}: {
  src: string
  alt: string
  duration?: number
  distance?: number
  delay?: number
}) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className="absolute"
    >
      <img
        src={src}
        alt={alt}
        className="w-auto h-auto mix-blend-screen opacity-50"
        loading="lazy"
      />
    </motion.div>
  )
}

// Glass overlay asset
export function GlassAsset({
  src,
  alt,
  children,
}: {
  src: string
  alt: string
  children?: React.ReactNode
}) {
  return (
    <div className="relative glass rounded-2xl p-6 border border-primary/20 overflow-hidden group">
      {/* Asset background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover mix-blend-lighten"
          loading="lazy"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">{children}</div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(37, 99, 235, 0.1) 0%,
              transparent 50%,
              rgba(6, 182, 212, 0.05) 100%
            )
          `,
        }}
      />
    </div>
  )
}
