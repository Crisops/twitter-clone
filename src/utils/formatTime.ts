import { diffHours, diffMinutes, diffSeconds, format } from '@formkit/tempo'

export const formatTimeTweet = (time: string): string => {
  let currentTime: string = ''

  const seconds = diffSeconds(new Date().toISOString(), time, 'floor')
  const minutes = diffMinutes(new Date().toISOString(), time, 'floor')
  const hours = diffHours(new Date().toISOString(), time, 'floor')

  currentTime = (seconds <= 60) ? `${seconds} seg` : (minutes <= 60) ? `${minutes}min` : (hours < 24) ? `${hours}h` : format(time, 'D MMM', 'en')

  return currentTime
}

export const formatTimeJoinedUser = (time: string): string => {
  return format(time, 'MMMM D', 'es')
}
