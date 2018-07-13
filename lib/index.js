import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpand, faCompress, faSitemap, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Main from './components/Main'
import { storiesOf, stories } from './story'
library.add(faExpand)
library.add(faCompress)
library.add(faSitemap)
library.add(faArrowLeft)

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
