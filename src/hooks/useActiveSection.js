import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the block currently closest to the top of the
 * viewport. Used to highlight the active step in the curriculum navigation.
 *
 * @param {string[]} ids - element ids to observe, in document order
 * @param {number} topOffset - px offset for the sticky header
 */
export function useActiveSection(ids, topOffset = 96) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    if (!ids.length) return

    const getElements = () => ids.map((id) => document.getElementById(id)).filter(Boolean)

    const onScroll = () => {
      const els = getElements()
      if (!els.length) return

      // Pick the last element whose top has scrolled past the offset line.
      let current = els[0].id
      for (const el of els) {
        if (el.getBoundingClientRect().top - topOffset <= 1) {
          current = el.id
        } else {
          break
        }
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, topOffset])

  return activeId
}
