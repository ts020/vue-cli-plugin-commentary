import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'
import VueRouter from 'vue-router'
import Page from './components/Page'
import Main from './components/Main'
import CommpentaryCard from './components/CommpentaryCard'
library.add(faExpand)
library.add(faCompress)
const router = new VueRouter({
    mode: 'history',
    // scrollBehavior(to) {
    //     scroll(to)
    // },
    routes: [{ path: '/', component: Page }],
})

export function setup(Vue) {
    Vue.use(VueRouter)
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.component('commpentary-card', CommpentaryCard)
    Vue.config.productionTip = false
    new Vue({
        router,
        render: h => h(Main),
    }).$mount('#app')
}
