export default function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 175)}, ${Math.floor(
    Math.random() * 175,
  )}, ${Math.floor(Math.random() * 175)})`;
}