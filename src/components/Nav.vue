<!--
 * @Author: Wuxh
 * @Date: 2020-12-14 00:26:21
 * @Desc: Nav
-->
<template lang="pug">
#nav
  router-link.router-link(
    v-for="router in routers" 
    :key="router" :to="router"
  ) {{ router.path }}
</template>

<script>
import { ref } from 'vue';
import router from '@/router';

export default {
  name: 'Nav',
  setup() {
    const routers = ref(router.getRoutes());
    return { routers };
  },
};
</script>


<style scoped lang="stylus">
#nav
  position fixed
  top 10px
  right 10px
  width 80px
  height 80px
  overflow hidden
  transition all 0.3s

  &:before
    position absolute
    top 0
    left 0
    content 'Nav'
    width 100%
    height 100%
    background blue
    border-radius 50%
    display flex
    align-items center
    justify-content center
    color #fff
    font-size 1.2rem

  &:hover
    width 140px
    right 0
    top 0
    height auto
    min-height 80px
    border 2px solid green
    padding 10px
    border-top-left-radius 10px

    & > a
      display block

    &:before
      width 0
      height 0

  & > a
    display none

    &.router-link
      color red
      line-height 1.5

      &.router-link-exact-active
        font-weight bold
        color green
</style>