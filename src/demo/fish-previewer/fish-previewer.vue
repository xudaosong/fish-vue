<template lang="html">
  <div>
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="$refs.previewer.show(index)">
    <fish-previewer :list="list" ref="previewer"></fish-previewer>
  </div>
</template>

<script>
import FishPreviewer from '../../components/fish-previewer'
export default {
  data() {
    return {
      list: [{
        src: 'http://img06.tooopen.com/images/20161010/tooopen_sy_181352973287.jpg',
        w: 671,
        h: 448
      }, {
        src: 'http://pic29.huitu.com/res/20150309/509951_20150309235657866318_1.jpg',
        w: 600,
        h: 534
      }]
    }
  },
  computed: {},
  mounted() {},
  methods: {},
  components: {
    FishPreviewer
  }
}
</script>

<style lang="css">
</style>
