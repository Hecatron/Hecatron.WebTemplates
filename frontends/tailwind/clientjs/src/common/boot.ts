import { Component, Vue } from 'vue-property-decorator'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import the tailwind css
import 'tailwindcss/tailwind.css'

// This will bring in the font files for fontawesome
// import '../css/fontawesome.scss';
// This will bring in the svg files for fontawesome
import setup_icons from './svgicon'
setup_icons()

// Destnation routes for different urls
import { routes } from './routes'

// Disable the annoying production / development warning
Vue.config.productionTip = false

// Root component
@Component({
    render: (h: any) => h(require('../root.vue').default),
    router: new VueRouter({ mode: 'history', routes }),
})
export default class BootComponent extends Vue {
}

// see https://vuejs.org/v2/api/#vm-mount for root component
new BootComponent().$mount('#app-root')
