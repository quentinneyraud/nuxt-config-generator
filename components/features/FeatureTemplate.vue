<template>
  <div
    class="Feature-component"
    :class="{
      '--is-open': opened
    }"
  >
    <!-- Name -->
    <button
      class="Feature-heading"
      @click="opened = !opened"
    >
      <p class="Feature-name">
        {{ name }}
      </p>
    </button>

    <!-- Content -->
    <div class="Feature-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      opened: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.Feature-component
  &.--is-open
    .Feature-content
      height auto

.Feature-heading
  border-bottom 1px solid #000
  padding 25px 0
  width 100%
  text-align left

.Feature-name
  fsz(35)

.Feature-content
  height 0px
  overflow hidden
</style>
