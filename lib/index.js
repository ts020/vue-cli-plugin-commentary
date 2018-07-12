import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main'
import { storiesOf } from './story'
library.add(faExpand)
library.add(faCompress)

export function setup(Vue) {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.config.productionTip = false
    new Vue({
        render: h => h(Main),
    }).$mount('#app')
}

export { storiesOf }
