import {
  Cpu,
  Shield,
  Rocket,
  Zap,
  Cloud,
  Database,
  Code,
  GitBranch,
  BarChart3,
  TrendingUp,
  Users,
  Package,
  Award,
  Server,
  Lock,
  Activity,
  type LucideIcon,
} from 'lucide-react'

/**
 * Maps icon name strings (stored in content.json) to lucide components.
 * Keeps content serializable while allowing the GUI to pick icons by name.
 */
export const iconRegistry: Record<string, LucideIcon> = {
  Cpu,
  Shield,
  Rocket,
  Zap,
  Cloud,
  Database,
  Code,
  GitBranch,
  BarChart3,
  TrendingUp,
  Users,
  Package,
  Award,
  Server,
  Lock,
  Activity,
}

export const iconNames = Object.keys(iconRegistry)

/** Resolve an icon by name with a safe fallback. */
export function getIcon(name: string | undefined, fallback: LucideIcon = Zap): LucideIcon {
  if (!name) return fallback
  return iconRegistry[name] || fallback
}
