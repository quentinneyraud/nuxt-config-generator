<template>
  <div class="ConfigurationForm-component">
    <div class="l-container">
      <div class="l-row">
        <div class="l-column ConfigurationForm-main">
          <ReadmeForm class="ConfigurationForm-feature" />
          <SitemapForm class="ConfigurationForm-feature" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Vuex
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      features: state => state.features
    })
  }
}
</script>

<style lang="stylus" scoped>
.ConfigurationForm-feature
  margin-top 45px
</style>
