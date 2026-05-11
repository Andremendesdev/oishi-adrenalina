export function openRest() {
  const hour = new Date().getHours();
  return hour >= 16 && hour < 24;
}
