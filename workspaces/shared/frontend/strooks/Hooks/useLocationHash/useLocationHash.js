import React, { useEffect } from 'react'

const useLocationHash = (onHashChange, defaultHash) => {
  useEffect(() => {
    onHashChange((window.location.hash || defaultHash || '').replace(/^#/, ''))
    const listenToHashChange = () => {
      const newHash = window.location.hash.replace(/^#/, '')
      onHashChange(newHash)
    }
    window.addEventListener('hashchange', listenToHashChange)
    return () => {
      window.removeEventListener('hashchange', listenToHashChange)
    }
  }, [])
}

export default useLocationHash
