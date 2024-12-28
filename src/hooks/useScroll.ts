import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState<number>(0)

  useEffect(() => {
    const handleScrollViewPort = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScrollViewPort)

    return () => {
      window.removeEventListener('scroll', handleScrollViewPort)
    }
  }, [scroll])

  return { scroll }
}
