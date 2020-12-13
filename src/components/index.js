const requireComponents = require.context('.', false, /\.\/\w+\.(vue|js|jsx)$/)

export default requireComponents.keys().reduce((all, component) => {
  const name = component.match(/\.\/(\w+)\.(vue|js|jsx)$/)[1]
  if (name === "index") return all
  return Object.assign(all, {
    [name]: requireComponents(component).default
  })
}, Object.create(null))