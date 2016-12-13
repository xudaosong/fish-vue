<style lang="scss">
#header > div:not(:first-child) {
    margin-top: 10px;
}
</style>
<template>
<div id="header">
  <fish-header>
    这是有返回按钮的头
  </fish-header>
  <fish-header>
    标题很长很长很长很长很长很长很长
  </fish-header>
  <fish-header :leftOptions="{showBack:false}">
    没有返回按钮
  </fish-header>
  <fish-header :rightOptions="{show:true}">
    <i class="weui-icon-search" slot="right"></i> 右侧自定义
  </fish-header>
  <fish-header :leftOptions="{show:true, showBack:false}" :rightOptions="{show:true}">
    <div slot="left">left</div>
    <div slot="right">right</div>
    左右自定义
  </fish-header>
</div>
</template>

<script>
import FishHeader from '../../components/fish-header'
export default {
  components: {
    FishHeader
  }
}
</script>

<style lang="less">@import '../../styles/weui/icon/weui-font';
.weui-icon-search {
    font-size: 20px;
}
</style>
