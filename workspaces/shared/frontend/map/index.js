import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
})

const Map = ({ salons }) => {
  return <MapWithNoSSR salons={salons} />
}

export default Map
