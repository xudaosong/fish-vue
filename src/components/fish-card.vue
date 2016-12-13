<template>
<div class="fish-card">
  <div class="fish-card-title" v-if="title && title.length>0">
    <span v-html="title"></span>
  </div>
  <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="scss">@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";

.fish-card {
    background: $card-background-color;
    margin: $card-indent;
    position: relative;
    border-radius: 2px;
    border: 1px solid $card-border-color;
    // @include shadow-2dp();
    .fish-card-title {
        border-bottom: solid 1px #ccc;
        padding-bottom: 4px;
        span {
            font-weight: bold;
            border-bottom: solid 1px blue;
            padding-bottom: 4px;
        }
        margin-bottom: 8px;
    }
}
</style>
