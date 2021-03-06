import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// @ts-ignore
const vuetify = new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: { dark: true },
})

export default vuetify
