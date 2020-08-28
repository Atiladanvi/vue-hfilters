import Panel from './Panel.vue'
import MultiSelect from './MultiSelect.vue'

function plugin (Vue) {
  Vue.component('Panel', Panel)
  Vue.component('MultiSelect', MultiSelect)
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
  MultiSelect,
  version
}
