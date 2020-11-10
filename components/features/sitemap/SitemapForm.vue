<template>
  <div class="SitemapFeatureForm-component">
    <FeatureTemplate
      name="Sitemap"
    >
      <!-- is active -->
      <Switcher
        :heading="{
          title: 'Ajouter un fichier Sitemap',
          description: 'Crée un fichier sitemap'
        }"
        :options="[{
          text: 'Oui',
          value: true
        }, {
          text: 'Non',
          value: false
        }]"
        :active-option-value="features.generateSitemap"
        @change="({value}) => $store.commit('setSitemap', { isActive: value })"
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
