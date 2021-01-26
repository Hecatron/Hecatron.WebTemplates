import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Vuetify
import vuetify from './vuetify'
import 'vuetify/dist/vuetify.css'

// Vuesax frontend
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

// Import boxicons
import 'boxicons'
import 'boxicons/css/boxicons.css'

// Destination routes for different urls
import { routes } from './routes'

// Disable the annoying production / development warning
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuesax, {

})

new Vue({
    // @ts-ignore
    vuetify,
    render: (h: any) => h(require('../root.vue').default),
    router: new VueRouter({ mode: 'history', routes })
}).$mount('#app-root')
