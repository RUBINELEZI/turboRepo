import requestIp from 'request-ip'

const baseLocation =
  'https://nordvpn.com/wp-admin/admin-ajax.php?action=get_user_info_data&ipv6'

export default async function handler(req, res) {
  let ip
  if (req.headers['x-vercel-forwarded-for']) {
    ip = req.headers['x-vercel-forwarded-for'].split(',')[0]
  } else if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(',')[0]
  } else if (req.headers['x-real-ip']) {
    ip = req.connection.remoteAddress
  } else {
    ip = req.connection.remoteAddress
  }

  console.log('ip', ip)

  const geoLocation = await fetch(`${baseLocation}=${ip}`).then((res) =>
    res.json()
  )

  res.status(200).json({ ...geoLocation, ip })
}
