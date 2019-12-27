export const padTimeStr = (date: string | number) => {
  const dateStr = typeof date === 'number' ? date.toString() : date
  return dateStr.padStart(2, '0')
}
