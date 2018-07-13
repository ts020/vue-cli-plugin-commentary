import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main'
import { storiesOf, stories } from './story'
library.add(faExpand)
library.add(faCompress)

export function setup(Vue, option) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.prototype.$commentary = { stories }
    Vue.config.productionTip = false
    new Vue({
        option,
        render: h => h(Main),
    }).$mount('#app')
}

export { storiesOf }
