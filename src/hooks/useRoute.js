import { useEffect, useState } from 'react'

// Tiny hash router. '#/chapter/<id>' opens the chapter reader; anything else
// is the home/overview page.
function parse() {
  const m = window.location.hash.match(/^#\/chapter\/([\w-]+)/)
  return m ? { name: 'chapter', id: m[1] } : { name: 'home' }
}

export function useRoute() {
  const [route, setRoute] = useState(parse)
  useEffect(() => {
    const onChange = () => setRoute(parse())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
