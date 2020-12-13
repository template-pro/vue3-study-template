import { createApp } from 'vue'

import Components from '@/components'
console.log(Components);

import router from './router'

createApp(() => {
  return (
    <>
      <Components.Nav />
      <router-view />
    </>
  )
}).use(router).mount('#app')
