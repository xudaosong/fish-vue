<template>
<div class="fish-header">
  <div class="fish-header-left" v-if="leftOptions.show || leftOptions.showBack">
    <div @click.preventDefault="onClickBack" v-if="leftOptions.showBack">
      <i class="fish-header-back"></i>
    </div>
    <slot name="left"></slot>
  </div>
  <div class="fish-header-title">
    <slot></slot>
  </div>
  <div class="fish-header-right" v-if="rightOptions.show">
    <!-- <i class="fa fa-search fa-lg" aria-hidden="true"></i> -->
    <!-- <a class="fish-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore">more</a> -->
    <slot name="right"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          show: true,
          showBack: true,
          preventGoBack: false
        }
      }
    },
    rightOptions: {
      type: Object,
      default () {
        return {
          show: false
        }
      }
    }
  },
  methods: {
    onClickBack() {
      if (this.leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        // window.alert('asdf')
        window.history.back()
      }
    }
  }
}
</script>

<style lang="scss">@import '../styles/variables.scss';
@import '../styles/mixins';

.fish-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    padding: 0 $header-indent;
    min-height: $header-height;
    // z-index: 3;
    background-color: $header-bg-color;
    color: $header-text-color;
    @include shadow-2dp();

    .fish-header-left {
        padding-right: $header-indent;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .fish-header-ico {
        // position: absolute;
        // height: $header-icon-size;
        // width: $header-icon-size;
        // left: $header-indent;
        // top: ($header-height - $header-icon-size) / 2;
        // overflow: hidden;
        // z-index: 3;
        display: block;
    }
    .fish-header-title {
        flex-grow: 1;
        display: block;
        position: relative;
        @include typo-title();
        font-weight: 400;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .fish-header-right {
        padding-left: $header-indent;
        flex-grow: 0;
        flex-shrink: 0;
    }
}

.fish-header-back:before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  border: 2px solid #fff;
  border-width: 2px 0 0 2px;
  transform: rotate(315deg)
}
</style>
