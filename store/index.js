export const state = _ => ({
  features: {
    removeReadmeFiles: true,
    generateSitemap: true,
    robots: true,
    gsap: true,
    netlify: true
  }
})

export const mutations = {
  reset (currentState) {
    Object.assign(currentState, state())
  },
  setReadme (state, { isActive }) {
    state.features.removeReadmeFiles = isActive
  },
  setSitemap (state, { isActive }) {
    state.features.generateSitemap = isActive
  }
}
