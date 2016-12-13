<template>
<fish-view :show-footer="true">
  <div slot="header">
    页头在这里
  </div>
  <p v-for="n in 30">内容在这里{{n}}</p>
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
