<template lang="html">
  <div>
      <fish-button>submit</fish-button>
      <fish-button type="primary">primary</fish-button>
      <fish-button type="warn">Delete</fish-button>
      <div>mini</div>
      <fish-button mini>submit</fish-button>
      <fish-button mini type="primary">primary</fish-button>
      <fish-button mini type="warn">Delete</fish-button>
      <br>
      <fish-button mini plain>submit</fish-button>
      <fish-button mini plain type="primary">primary</fish-button>

      <div>plain</div>
      <fish-button plain>submit</fish-button>
      <fish-button plain type="primary">primary</fish-button>

      <div>disabled</div>
      <fish-button disabled>disable submit</fish-button>
      <fish-button type="primary" disabled>disable primary</fish-button>
      <fish-button type="warn" disabled>disable Delete</fish-button>

      <div>use :text and :disabled</div>
      <fish-button :text="submit001" :disabled="disable001" v-on:click="processButton001" type="primary"></fish-button>

  </div>
</template>

<script>
import FishButton from '../../components/fish-button'
export default {
  data() {
    return {
      submit001: 'click me',
      disable001: false
    }
  },
  methods: {
    processButton001() {
      this.submit001 = 'processing'
      this.disable001 = true
    }
  },
  components: {
    FishButton
  }
}
</script>

<style lang="css">
</style>
