import * as L from 'leaflet'

const LeafIcon = L.Icon.extend({
  options: {},
})

export const selfIcon = new LeafIcon({
  iconUrl:
    'https://www.clipartmax.com/png/small/155-1551908_open-google-current-location-icon.png',
  width: '10px',
  height: '10px',
})

export const blueIcon = new LeafIcon({
  iconUrl:
    'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF',
})

export const greenIcon = new LeafIcon({
  iconUrl:
    'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
})
