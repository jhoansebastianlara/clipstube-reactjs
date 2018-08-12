export function getDynamicAvatar(key, width) {
  const w = width || 300
  return `https://api.adorable.io/avatars/${w}/${key}`
}
