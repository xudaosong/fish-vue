<template>
<i ref="i" :class="className" @click="handleClick"></i>
</template>

<script>
export default {
  props: {
    type: String
  },
  computed: {
    className() {
      return `weui-icon weui-icon-${this.type}`
    }
  },
  methods: {
    handleClick: function() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">@import '../styles/weui/icon/weui-font';
@import '../styles/weui/icon/weui-icon_font';
.icon_big:before {
    font-size: 104px;
}
.icon_small:before {
    font-size: 12px;
}
</style>
