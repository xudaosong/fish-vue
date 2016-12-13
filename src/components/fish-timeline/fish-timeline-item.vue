<template>
	<li class="fish-timeline-item">
		<!-- <div :class=" {'fish-timeline-item-head': !isFirst,'fish-timeline-item-head-first': isFirst }" :style="headStyle"> -->
			<!-- <fish-icon v-show="isFirst" type="success_no_circle" class="fish-timeline-item-checked"></fish-icon> -->
			<div class="fish-timeline-item-head" :style="headStyle">
		</div>
		<div class="fish-timeline-item-tail" :style="tailStyle"></div>
		<div class="fish-timeline-item-content">
			<slot></slot>
		</div>
	</li>
</template>

<script>
import FishIcon from '../fish-icon'

export default {
  data () {
    return {
      isLast: true,
      isFirst: true,
      headStyle: { backgroundColor: this.$parent.color }
    }
  },
  beforeCreate () {
    this.$parent.setChildProps()
  },
  beforeDestroy () {
    // this will be null
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.setChildProps()
    })
  },
  components: {
    FishIcon
  },
  computed: {
    tailStyle () {
      return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color }
    }
  }
}
</script>
