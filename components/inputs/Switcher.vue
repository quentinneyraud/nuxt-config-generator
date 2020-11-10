<template>
  <div class="Switcher-component">
    <!-- Heading -->
    <InputHeading v-bind="heading" />

    <!-- Input -->
    <div class="Switcher-options">
      <button
        v-for="(option, optionIndex) in options"
        :key="optionIndex"
        class="Switcher-option"
        :class="{
          active: activeOptionValue === option.value
        }"
        @click="$emit('change', option)"
      >
        <span>{{ option.text }}</span>
      </button>
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
    options: {
      type: Array,
      required: true
    },
    activeOptionValue: {
      type: [Boolean, String],
      required: false,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.Switcher-component
  position relative
  margin-top 25px

.Switcher-options
  border-radius 10px
  height 50px
  display inline-flex
  overflow hidden

.Switcher-option
  background-color grey
  min-width 100px
  flex-parent-center()

  &:nth-child(n + 2)
    border-left 2px solid #000

  span
    color white

  &.active
    background-color green
    no-interaction()
</style>
