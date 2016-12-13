<template>
<div class="markdown-body" v-html="htmlContent" />
</template>

<script>
import '../style/markdown.css'
let markdown = require('markdown').markdown
/**
 * markdown
 * @module comonents/Markdown
 * @desc markdown语法解析成HTML并浏览显示
 * @param {string} content Markdown源文本
 *
 * @example
 * <markdown :content="content"></markdown>
 */
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    htmlContent() {
      return markdown.toHTML(this.content)
    }
  }
}
</script>
