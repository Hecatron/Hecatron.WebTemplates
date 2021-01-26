import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import SidebarComponent from './dashboard/sidebar.vue'
import TopnavbarComponent from './dashboard/topnavbar.vue'
import SideBarComponentClass from './dashboard/sidebar'

@Component({
    components: {
        SidebarComponent,
        TopnavbarComponent,
    },
})
export default class RootComponent extends Vue {

    public toggle_sidebar() {
        const sidebar1 = this['$refs'].sidebar1 as SideBarComponentClass
        sidebar1.toggle_sidebar()
    }

    public created() {
        const vuetifyprops = this['$vuetify']
        vuetifyprops.theme.dark = true
    }
}
