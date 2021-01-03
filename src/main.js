import { createApp } from 'vue'

import Components from '@/components'
import { ElementPlus } from '@/plugin'
console.log(Components);

import router from './router'

createApp(() => {
  return (
    <>
      <Components.Nav />
      <router-view />
    </>
  )
}).use(router).use(ElementPlus).mount('#app')
