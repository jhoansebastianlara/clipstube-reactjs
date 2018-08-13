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
