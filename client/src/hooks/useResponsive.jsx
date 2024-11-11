import { useEffect, useState } from 'react'

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 992)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768 ? true : false)
    setIsTablet(window.innerWidth <= 992 ? true : false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile, isTablet }
}
