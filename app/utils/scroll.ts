/**
 * Smooth scroll to a section by ID
 */
export function smoothScrollToId(elementId: string) {
  const element = document.getElementById(elementId)
  if (!element) return

  // Use native smooth scroll
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  // Set focus after a brief delay to allow scroll to complete
  setTimeout(() => {
    element.focus()
  }, 600)
}

/**
 * Smooth scroll to contact section
 */
export function scrollToContact() {
  smoothScrollToId('contact')
}

/**
 * Smooth scroll to a specific position
 */
export function smoothScrollToPosition(targetY: number, duration = 800) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = Date.now()

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }

  const scroll = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutQuad(progress)

    window.scrollTo(0, startY + distance * ease)

    if (progress < 1) {
      requestAnimationFrame(scroll)
    }
  }

  requestAnimationFrame(scroll)
}
