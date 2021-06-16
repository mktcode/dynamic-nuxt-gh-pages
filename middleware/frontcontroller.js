export default function ({ route, redirect }) {
  const path = route.hash.replace('#', '')
  redirect(path)
}
