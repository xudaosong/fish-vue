<template>
<fish-view :show-footer="true">
  <div slot="header">
    页头在这里
  </div>
  <p v-for="n in 10">内容第一部份在这里{{n}}</p>
  <fish-view style="z-index:99;height:200px;">
    <div slot="header">
      嵌套头在这里
    </div>
    <p v-for="n in 20">嵌套内容在这里{{n}}</p>
  </fish-view>
  <p v-for="n in 10">内容第二部份在这里{{n}}</p>
  <div slot="footer">
    页尾在这里
  </div>
</fish-view>
</template>

<script>
import FishView from '../../components/fish-view'
export default {
  components: {
    FishView
  }
}
</script>
