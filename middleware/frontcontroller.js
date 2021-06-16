export default function ({ base, route, redirect }) {
  const path = route.hash.replace('#' + base, '/')
  redirect(path)
}
