import { Reservation, Salon, User } from 'db'

export default async function handler(req, res) {
  const { paymentMethod, salon, employee, slot, user } = req.body

  const salonDB = await Salon.findOne({ name: salon })
  const customer = await User.findOne({ email: user })

  const reservation = await Reservation.create({
    timeSlot: slot,
    salon: salonDB._id,
    employee,
    paymentMethod,
    customer: customer._id,
  })

  return res.status(200).json(reservation)
}
