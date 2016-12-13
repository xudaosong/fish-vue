import uuidMixin from './mixin_uuid'

export default {
  mixins: [uuidMixin],
  props: {
    required: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.handleChangeEvent = false
  },
  computed: {
    dirty() { // 是否已经修改过内容
      return !this.prisine
    },
    invalid() { // 是否非法内容
      return !this.valid
    }
  },
  methods: {
    setTouched() {
      this.touched = true
    }
  },
  watch: {
    value(newVal) {
      if (this.prisine === true) {
        this.prisine = false
      }
      if (!this.handleChangeEvent) {
        this.$emit('on-change', newVal)
      }
    }
  },
  data() {
    return {
      errors: [], // 错误信息列表
      prisine: true, // 是否没有修改过内容
      touched: false, // 是否已经触发，只要光标进入并离开则为true
      valid: true, // 是否合法内容
      submitted: true // 是否提交过
    }
  }
}
