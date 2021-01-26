import { Component, Vue } from 'vue-property-decorator'
import SidebarComponent from './dashboard/sidebar.vue'

@Component({
    components: {
        SidebarComponent,
    },
})
export default class RootComponent extends Vue {
}
