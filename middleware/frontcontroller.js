export default function ({ base, route, redirect }) {
  const path = route.hash.replace('#/' + base, '/')
  console.log(base, route, path)
  redirect(path)
}
