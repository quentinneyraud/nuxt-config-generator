<template>
  <div class="Switcher-component">
    <div class="Switcher-options">
      <div
        v-for="(option, optionIndex) in options"
        :key="optionIndex"
        class="Switcher-option"
        @click="currentOption = option.value"
      >
        <span>{{ option.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentOption: this.options?.[0]?.value
    }
  },
  watch: {
    currentOption (currentOption) {
      this.$emit('change', {
        option: currentOption
      })
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

  span
    color white
</style>
