import { User } from 'db'

export default async function handler(req, res) {
  const { id } = req.query

  const employee = await User.findOne(
    { _id: id },
    { firstName: 1, lastName: 1 }
  )
  res.status(200).json(employee)
}
