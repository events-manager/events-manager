import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const requireComponent = require.context(
  // The relative path of the components folder
  '~/components/layout',
  // Whether or not to look in subfolders
  false
  // The regular expression used to match base component filenames
  // /Page[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Add icons to library
  library.add(faUserSecret, faThLarge)

  // Register font awesome icon component globally.
  Vue.component('font-awesome-icon', FontAwesomeIcon)

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
