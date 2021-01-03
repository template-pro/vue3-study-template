<!--
 * @Author: Wuxh
 * @Date: 2021-01-03 14:29:59
 * @Desc: element-plus
-->
<template lang="pug">
el-button(@click="helloMessage") click me
</template>

<script>
export default {
  methods: {
    helloMessage() {
      this.$message({
        type: 'success',
        message: 'hello element-plus',
      });
    },
  },
};
</script>

<style scoped lang="stylus"></style>