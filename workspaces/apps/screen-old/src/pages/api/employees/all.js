import { User, Salon } from 'db'

export default async function handler(req, res) {
  const { salon, selectedDate } = req.query

  const dbSalon = await Salon.findOne({ name: salon })

  const employees = await User.find(
    { role: 'employee', salon: dbSalon._id },
    { firstName: 1, lastName: 1 }
  )
  res.status(200).json(employees)
}
