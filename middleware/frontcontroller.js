export default function ({ app, base, route }) {
  const path = route.hash.replace('#/' + base, '/')
  app.router.push(path)
}
