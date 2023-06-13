const { navigator } = typeof window !== 'undefined' ? window : {}

export const firstOfMonth = (date = new Date()) =>
  new Date(new Date(date).setDate(1))

export const addMonths = (date, val) =>
  new Date(date.setMonth(date.getMonth() + val))

export const formatDayYear = (date, locale = navigator?.language) =>
  Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)

export const formatMonth = (date, locale = navigator?.language) =>
  Intl.DateTimeFormat(locale, { month: 'short' }).format(date)

export const formatDayName = (date, locale = navigator?.language) =>
  Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)

export const formatFullDate = (date, locale = navigator?.language) =>
  Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',

    // Time zone to express it in
    // Force 12-hour or 24-hour
    // hour12: true | false,

    // Rarely-used options
    // hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
    // formatMatcher: 'basic' | 'best fit',
  }).format(date)

export const formatDateOfMonth = (date) => leftpad(date.getDate())

export const formatTime = (date) =>
  `${leftpad(date.getHours())}:${leftpad(date.getMinutes())}`

export const leftpad = (val, length = 2, char = '0') =>
  ('' + val).length === length ? '' + val : leftpad(char + val, length, char)
