const { navigator } = typeof window !== 'undefined' ? window : {}

export const firstOfMonth = (date = new Date()) => new Date(new Date(date).setDate(1))

export const addMonths = (date, val) => new Date(date.setMonth(date.getMonth() + val))

export const formatDayYear = (date, locale = navigator?.language) =>
  Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)

export const formatDayName = (date, locale = navigator?.language) =>
  Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)

export const formatDateOfMonth = date => leftpad(date.getDate())

export const leftpad = (val, length = 2, char = '0') =>
  ('' + val).length === length ? '' + val : leftpad(char + val, length, char)
