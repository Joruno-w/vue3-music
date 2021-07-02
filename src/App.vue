<template>
  <div id="app">
    <MHeader/>
    <Tab/>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/header/header'
import Tab from '@/components/tab/tab'
import { getRecommend } from '@/service/recommend'

export default {
  components: {
    Tab,
    MHeader
  },
  async created() {
    const res = await getRecommend()
    console.log(res)
  }
}
</script>

<style lang="scss">

</style>
