<template>
  <div class="RadioButton-component">
    <!-- Heading -->
    <InputHeading v-bind="heading" />

    <!-- Input -->
    <div class="RadioButton-main">
      <label class="RadioButton-label" :for="randomId" />
      <input :id="randomId" class="RadioButton-input" :checked="activeOptionValue" type="checkbox">
      <div class="RadioButton-inputCircle" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: Object,
      required: true
    },
    activeOptionValue: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      randomId: Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>

<style lang="stylus" scoped>
.RadioButton-component
  position relative
  margin-top 25px

.RadioButton-label, .test
  display block
  position relative
  width 10px
  height 10px
  background-color red

.test
  background-color blue

.RadioButton-input
  position absolute
  left -9999px

  &:checked + .test
    background-color red
</style>
