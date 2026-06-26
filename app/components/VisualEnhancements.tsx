'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Parallax scrolling effect
export function ParallaxBackground({
  image,
  depth = 0.5,
  className = ''
}: {
  image: string
  depth?: number
  className?: string
}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        y: scrollY * depth,
        opacity: 1 - scrollY * 0.001,
      }}
      className={`absolute inset-0 ${className}`}
    >
      <img
        src={image}
        alt="parallax background"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  )
}

// Floating element animation
export function FloatingElement({
  children,
  duration = 6,
  distance = 30,
  delay = 0,
}: {
  children: React.ReactNode
  duration?: number
  distance?: number
  delay?: number
}) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// Glow effect overlay
export function GlowEffect({
  color = '#2563EB',
  intensity = 0.3,
  blur = 100,
}: {
  color?: string
  intensity?: number
  blur?: number
}) {
  return (
    <motion.div
      animate={{
        opacity: [intensity * 0.5, intensity, intensity * 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${color}00 0%, ${color}00 100%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}

// Blur transition effect
export function BlurOverlay({
  intensity = 0.3,
  direction = 'top',
}: {
  intensity?: number
  direction?: 'top' | 'bottom' | 'both'
}) {
  const gradients = {
    top: `linear-gradient(to bottom, rgba(0,0,0,${intensity}) 0%, rgba(0,0,0,0) 100%)`,
    bottom: `linear-gradient(to top, rgba(0,0,0,${intensity}) 0%, rgba(0,0,0,0) 100%)`,
    both: `linear-gradient(to bottom, rgba(0,0,0,${intensity}) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,${intensity}) 100%)`,
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: gradients[direction],
      }}
    />
  )
}

// Animated gradient background
export function AnimatedGradientBg({
  colors = ['#2563EB', '#06B6D4', '#7C3AED'],
}: {
  colors?: string[]
}) {
  return (
    <motion.div
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="absolute inset-0"
      style={{
        background: `linear-gradient(135deg, ${colors.join(', ')})`,
        backgroundSize: '200% 200%',
      }}
    />
  )
}

// Mesh gradient effect
export function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-highlight/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

// Animated gradient text
export function AnimatedGradientText({
  text,
  colors = ['#2563EB', '#06B6D4', '#7C3AED'],
}: {
  text: string
  colors?: string[]
}) {
  return (
    <motion.div
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        background: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      className="text-transparent font-bold"
    >
      {text}
    </motion.div>
  )
}

// Scroll reveal with blur
export function ScrollReveal({
  children,
  delay = 0,
  blur = 10,
}: {
  children: React.ReactNode
  delay?: number
  blur?: number
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Staggered reveal (for multiple items)
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
}

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Magnetic hover effect
export function MagneticButton({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// Tilt effect on hover
export function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 10
    const y = -(e.clientX - rect.left - rect.width / 2) / 10

    setRotation({ x, y })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <motion.div
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated counter
export function AnimatedCounter({
  from = 0,
  to = 100,
  duration = 2,
  suffix = '',
}: {
  from?: number
  to?: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(from + (to - from) * progress))

      if (progress === 1) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [from, to, duration])

  return <span>{count}{suffix}</span>
}

// Dot pattern background
export function DotPattern({
  density = 20,
  opacity = 0.1,
}: {
  density?: number
  opacity?: number
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    >
      <defs>
        <pattern id="dots" x={density} y={density} width={density} height={density} patternUnits="userSpaceOnUse">
          <circle cx={density / 2} cy={density / 2} r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}

// Grid background
export function GridBackground({
  size = 40,
  opacity = 0.05,
}: {
  size?: number
  opacity?: number
}) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}
