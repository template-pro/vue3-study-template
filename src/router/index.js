import { createRouter, createWebHistory } from 'vue-router'
import { toPairs } from 'lodash-es'

const requireDemoPages = require.context('@/pages', false, /\.\/\w+\.(vue|js|jsx)$/)

const demoPages = requireDemoPages.keys().reduce((all, component) => {
  const name = component.match(/\.\/(\w+)\.(vue|js|jsx)$/)[1]
  return Object.assign(all, {
    [name]: requireDemoPages(component).default
  })
}, Object.create(null))


const router = createRouter({
  history: createWebHistory(),
  routes: toPairs(demoPages).map(([name, page]) => ({
    path: `/${name}`,
    component: page,
    meta: { title: name }
  }))
})

router.beforeEach(({ meta: { title } }) => {
  document.title = `vue3-study | ${title}`
})

export default router