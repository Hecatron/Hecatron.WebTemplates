import { Component, Vue } from 'vue-property-decorator'
import SidebarComponent from './dashboard/sidebar.vue'
import TopnavbarComponent from './dashboard/topnavbar.vue'

@Component({
    components: {
        SidebarComponent,
        TopnavbarComponent,
    },
})
export default class RootComponent extends Vue {
}
