'use client'
import { useState, useEffect } from 'react'
import useGeoLocation from 'hooks/useGeoLocation'
import MapOverlay from './MapOverlay'
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet'
import { blueIcon, greenIcon, selfIcon } from './Markers'
import CONFIG from 'config'
import styles from './map.module.scss'

const { VISITOR_API, DEFAULT_GEO } = CONFIG

export default function Map({ salons }) {
  const { geoLocation, authorizeLocation, permission, setGeoLocation } =
    useGeoLocation(VISITOR_API, DEFAULT_GEO)

  return (
    <>
      <MapOverlay
        styles={styles}
        permission={permission}
        authorizeLocation={authorizeLocation}
        setGeoLocation={setGeoLocation}
      />
      <MapContainer
        style={{ height: '100%' }}
        scrollWheelZoom={false}
        // gestureHandling={true}
        // tapHold={true}
        center={geoLocation}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geoLocation !== DEFAULT_GEO && (
          <Marker position={geoLocation} icon={greenIcon} />
        )}
        {salons.map(salon => (
          <Marker key={salon.name} position={salon.coords}>
            <Popup>
              <h3>{salon.name}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
                magni. Eius obcaecati eveniet saepe delectus quas provident
                tempore, harum doloribus vitae cumque nostrum ut inventore
                repellendus odio autem molestias cupiditate.
              </p>
            </Popup>
          </Marker>
        ))}
        <ChangeView coords={geoLocation} />
      </MapContainer>
    </>
  )
}

export function ChangeView({ coords }) {
  const [zoom, setZoom] = useState(16)

  useEffect(() => {
    function zoomOut() {
      setZoom(z => {
        const newZoom = z + z + 0.01
        if (newZoom < 19) {
          requestAnimationFrame(zoomOut)
        }
        return z + 0.01
      })
    }
  }, [coords])
  const map = useMap()
  if ((coords && coords !== DEFAULT_GEO) || zoom !== 16) {
    setTimeout(() => {
      window.map = map
      map.setView(coords, zoom)
    })
  }
  return null
}
