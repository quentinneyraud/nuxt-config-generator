<template>
  <div class="SitemapFeatureForm-component">
    <FeatureTemplate
      name="README files"
    >
      <!-- is active -->
      <Switcher
        :heading="{
          title: 'Supprimer les fichiers README.md',
          description: 'Va supprimer les fichiers README.md'
        }"
        :options="[{
          text: 'Oui',
          value: true
        }, {
          text: 'Non',
          value: false
        }]"
        :active-option-value="features.removeReadmeFiles"
        @change="({value}) => $store.commit('setReadme', { isActive: value })"
      />
    </FeatureTemplate>
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

<style>

</style>
