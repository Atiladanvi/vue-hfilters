import Panel from './Panel.vue'

function plugin (Vue) {
  Vue.component('Panel', Panel)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  Panel,
  version
}
