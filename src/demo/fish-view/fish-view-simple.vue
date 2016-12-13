<template>
<fish-view>
  <div slot="header">
    页头在这里
  </div>
  <p v-for="n in 30">内容在这里{{n}}</p>
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
