<template>
<div id="home">
  <p v-for="item in Routes">
    <router-link :to="item">
      {{item.name}}
    </router-link>
  </p>
</div>
</template>

<script>
import {
  Routes
} from './config'
export default {
  data() {
    let routes = Routes.filter((item) => {
      return !!item.name
    })
    return {
      Routes: routes
    }
  }
}
</script>
