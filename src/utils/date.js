/*
 * Date and time utilities
 */

export function getPeriod() {
  const hour = new Date().getHours()
  if (hour >= 6 && hour < 12) {
    return 'morning'
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}
