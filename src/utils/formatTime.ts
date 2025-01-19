import { Tables } from '@/types/database.types'
import { diffHours, diffMinutes, diffSeconds, format } from '@formkit/tempo'

export const formatTimeTweet = (time: Tables<'tweets'>['created_at']): string => {
  let currentTime: string = ''

  const now = new Date().toISOString()

  const seconds = Math.abs(diffSeconds(now, time, 'floor'))
  const minutes = Math.abs(diffMinutes(now, time, 'floor'))
  const hours = Math.abs(diffHours(now, time, 'floor'))

  currentTime = (seconds <= 60) ? `${seconds} seg` : (minutes <= 60) ? `${minutes}min` : (hours < 24) ? `${hours}h` : format(time, 'D MMM', 'es')

  return currentTime
}

export const formatTimeJoinedUser = (time: Tables<'users'>['created_at']): string => {
  const formatTime = format(time, 'MMMM YYYY', 'es')
  const [month, year] = formatTime.split(' ')

  const monthUpperCase = `${month.charAt(0).toUpperCase()}${month.slice(1)}`

  return `${monthUpperCase} de ${year}`
}

export const formatTimePost = (time: Tables<'tweets'>['created_at']) => {
  return format(time, 'h:mm a  D MMM. YYYY', 'es')
}
