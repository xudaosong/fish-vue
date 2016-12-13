<template>
<button class="weui-btn" :class="classes" :disabled="disabled" v-on:click="handleClick">
    {{text}}<slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String
  },
  computed: {
    classes() {
      return [{
        'weui-btn_disabled': this.disabled,
        'weui-btn_mini': this.mini
      },
        `weui-btn_${this.type}`,
        this.plain ? `weui-btn_plain-${this.type}` : ''
      ]
    }
  },
  methods: {
    handleClick: function($event) {
      if (this.disabled) {
        $event.preventDefault()
        $event.stopPropagation()
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="less">@import '../styles/weui/widget/weui-button/weui-button.less';</style>
