import { User } from 'db'

export default async function handler(req, res) {
  const users = await User.find({}, { firstName: 1, lastName: 1, email: 1 })
  res.status(200).json(users)
}
