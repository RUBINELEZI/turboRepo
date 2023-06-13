const getWeeks = firstOfMonth => {
  const current = new Date(firstOfMonth)
  const dayOfWeek = current.getDay()

  if (dayOfWeek > 0) {
    current.setDate(current.getDate() - dayOfWeek)
  }

  const weeks = []
  const condition = { val: false }

  while (!condition.val) {
    const newWeek = []
    weeks.push(newWeek)
    for (let i = 0; i < 7; i++) {
      newWeek.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }
    condition.val = current.getYear() !== firstOfMonth.getYear()
    condition.val =
      condition.val || (current.getMonth() > firstOfMonth.getMonth() && current.getDay() === 0)
  }
  return weeks
}

export default getWeeks
