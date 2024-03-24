'use client'

import { useEffect, useState } from 'react'

const getHash = () => {
  return typeof window !== 'undefined' ? window.location.hash : undefined
}

const useHash = () => {
  const [isClient, setIsClient] = useState(false)
  const [hash, setHash] = useState(getHash())
  // console.log('useHash hash', hash)
  useEffect(() => {
    setIsClient(true)
    // const handleHashChange = () => {
    //   setHash(getHash())
    // }
    // window.addEventListener('hashChange', handleHashChange)
    // router.events.on("hashChangeComplete", handleHashChange)
    // return () => {
    //   window.removeEventListener('hashChange', handleHashChange)
    //   // router.events.off("hashChangeComplete", handleHashChange)
    // }
  }, [])
  return isClient ? hash : null
}

export default useHash
