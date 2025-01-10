import { diffHours, diffMinutes, diffSeconds, format } from '@formkit/tempo'

export const formatTimeTweet = (time: string): string => {
  let currentTime: string = ''

  const now = new Date().toISOString()

  const seconds = Math.abs(diffSeconds(now, time, 'floor'))
  const minutes = Math.abs(diffMinutes(now, time, 'floor'))
  const hours = Math.abs(diffHours(now, time, 'floor'))

  currentTime = (seconds <= 60) ? `${seconds} seg` : (minutes <= 60) ? `${minutes}min` : (hours < 24) ? `${hours}h` : format(time, 'D MMM', 'en')

  return currentTime
}

export const formatTimeJoinedUser = (time: string): string => {
  const formatTime = format(time, 'MMMM YYYY', 'es')
  const [month, year] = formatTime.split(' ')

  const monthUpperCase = `${month.charAt(0).toUpperCase()}${month.slice(1)}`

  return `${monthUpperCase} de ${year}`
}
