<template>
  <div class="InputHeading-component">
    <!-- Title -->
    <p class="InputHeading-title">
      {{ title }}
    </p>

    <!-- Description -->
    <p v-if="description" class="InputHeading-description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.InputHeading-description
  font-style italic
</style>
