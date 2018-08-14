export const getDynamicAvatar = (key, width) => {
  const w = width || 300
  return `https://api.adorable.io/avatars/${w}/${key}`
}

export const addLeftPad = (number) => {
  const pad = '00'
  return pad.substring(0, pad.length - number.length) + number
}

export const formatTime = (secs) => {
  const minutes = parseInt(secs / 60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${minutes} : ${addLeftPad(seconds.toString())}`
}

// converts time with format "hh:mm:ss" to seconds
export const convertTimeFormattedToSeconds = (timeFormatted = '') => {
	let secondsResult = 0
	const timeFormattedSplit = timeFormatted.split(':')
  if (timeFormattedSplit.length !== 3) return secondsResult

  const hours = parseInt(timeFormattedSplit[0], 10)
  const minutes = parseInt(timeFormattedSplit[1], 10)
  const seconds = parseInt(timeFormattedSplit[2], 10)

  secondsResult += hours * 60 * 60
  secondsResult += minutes * 60
  secondsResult += seconds

  return secondsResult
}
