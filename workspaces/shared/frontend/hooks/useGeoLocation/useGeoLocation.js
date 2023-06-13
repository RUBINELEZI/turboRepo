import { useEffect, useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
const baseLocation = 'https://api.visitorapi.com/api/?pid'

const useGeoLocation = (projectID, defaultValue, limit = 24) => {
  const [permission, setPermission] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [geoLocation, setGeoLocation] = useState(defaultValue)
  const [watching, setWatching] = useState(false)
  const watchID = useRef()

  const { data: geoLocationFromVisitorAPI } = useQuery(
    ['my-ip'],
    () => getGeoLocationFromVisitorAPI(projectID),
    {
      enabled: mounted,
    }
  )

  const locationApiCallback = (position) => {
    const { latitude, longitude } = position.coords
    setGeoLocation([latitude, longitude])
  }

  const authorizeLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locationApiCallback(position)
          if (!watching) {
            // console.log('watching now')
            setWatching(true)
            watchID.current =
              navigator.geolocation.watchPosition(locationApiCallback)
          }
        },
        (err) => setPermission('denied')
      )
    }
  }

  useEffect(() => {
    localStorage.clear()
  }, [permission])

  useEffect(() => {
    async function checkPermissions() {
      const name = 'geolocation'
      const { state } = await navigator.permissions.query({ name })
      if (state === 'granted') {
        authorizeLocation()
      }
      setPermission(state)
    }
    checkPermissions()
  }, [])

  useEffect(() => {
    // console.log('useEffect', permission)
    if (permission && permission !== 'granted') {
      if (geoLocationFromVisitorAPI) {
        setGeoLocation(geoLocationFromVisitorAPI)
      } else {
        const fromLS = getGeoLocationLocalStorage(limit)
        if (fromLS) {
          setGeoLocation(fromLS)
        }
        setMounted(true)
      }
    }
  }, [geoLocationFromVisitorAPI, permission])

  return { geoLocation, authorizeLocation, permission, setGeoLocation }
}

export default useGeoLocation

const getGeoLocationFromVisitorAPI = async (projectID) => {
  // console.log('getting from api')
  const res = await fetch(`${baseLocation}=${projectID}`)
  if (res.status !== 200) return null
  const resText = await res.text()
  const data = JSON.parse(resText)
  const now = new Date()
  localStorage.setItem('strooks-geolocation-last-date', now.toISOString())
  const [latitude, longitude] = data.data.cityLatLong.split(',')
  const coords = [Number(latitude), Number(longitude)]
  localStorage.setItem(
    'strooks-geolocation-visitor-api',
    JSON.stringify(coords)
  )
  return coords
}

const getGeoLocationLocalStorage = (limit) => {
  const lastDateLS = localStorage.getItem('strooks-geolocation-last-date')
  if (!lastDateLS) return null
  const lastDate = new Date(lastDateLS)
  lastDate.setHours(lastDate.getHours() + limit)
  const today = new Date()
  if (today < lastDate) {
    // console.log('geolocation from localstorage')
    return JSON.parse(localStorage.getItem('strooks-geolocation-visitor-api'))
  }
}
