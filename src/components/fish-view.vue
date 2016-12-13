<style lang="scss">@import "../styles/variables";
.fish-view {
    position: relative;
    height: 100%;
}
.fish-view-header {
    z-index: 100;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: $header-height;
    background-color: $header-bg-color;
}
.fish-view-header-indent {
    padding-top: $header-height;
}
.fish-view-body {
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.fish-view-footer {
    position: absolute;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: $footer-height;
    background-color: $footer-bg-color;
}
.fish-view-footer-indent {
    padding-bottom: $footer-height;
}
</style>

<template>
<div class="fish-view">
  <div class="fish-view-header" v-if="showHeader">
    <slot name="header" slot="content" style="color:blue"></slot>
  </div>
  <div class="fish-view-body" :class="[ showHeader?'fish-view-header-indent':'', showFooter?'fish-view-footer-indent':'']">
    <slot></slot>
  </div>
  <div class="fish-view-footer" v-if="showFooter">
    <slot name="footer"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    showHeader: {
      type: Boolean,
      default: true
    },
    showFooter: {
      type: Boolean,
      default: false
    }
  }
}
</script>
