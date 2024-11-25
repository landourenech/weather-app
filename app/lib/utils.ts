export function formatTime (dateString: string):string{
  return new Date(dateString).toLocaleDateString('fr-Fr', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

export function getWindDirection(degrees: number): string {
  const direction =['N', 'NE','E', 'SE', 'S', 'SW', 'W', 'NW']
  const index = Math.round(degrees /45)%8
  return direction[index]
}