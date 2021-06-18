export default function (context) {
  const path = context.route.hash.replace('#!', '')
  if (path.length && context.app.router.resolve(path).resolved.matched.length) {
    context.redirect(path)
  }
}
