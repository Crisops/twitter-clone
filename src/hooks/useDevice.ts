import { useEffect, useState } from 'react'

export const useDevice = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop' | ''>('')

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (/mobile|android|iphone|ipad|ipod|windows phone/i.test(userAgent)) {
      setDeviceType('mobile')
    } else if (/tablet|ipad/i.test(userAgent)) {
      setDeviceType('tablet')
    } else {
      setDeviceType('desktop')
    }
  }, [])

  return { deviceType }
}
