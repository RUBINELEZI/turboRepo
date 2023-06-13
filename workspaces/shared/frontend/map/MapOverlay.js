const bergenCoords = [60.39250009014687, 5.33116366943065]
const lisbonCoords = [38.6996119, -9.2461528]

const MapOverlay = ({ styles, permission, authorizeLocation, setGeoLocation }) => {
  return (
    <div className={styles.mapOverlay}>
      {permission !== 'granted' && (
        <div className={styles.permissionButton}>
          <button onClick={authorizeLocation}>Location</button>
        </div>
      )}

      <div className={styles.lisbonButton}>
        <button onClick={() => setGeoLocation(lisbonCoords)}>Lisbon</button>
      </div>

      <div className={styles.bergenButton}>
        <button onClick={() => setGeoLocation(bergenCoords)}>Bergen</button>
      </div>
    </div>
  )
}

export default MapOverlay
