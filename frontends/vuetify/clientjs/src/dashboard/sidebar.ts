import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import SidebarmenuComponent from './sidebarmenu.vue'

@Component({
    components: {
        SidebarmenuComponent,
    },
})
export default class SidebarComponent extends Vue {
    public sidebar_visible:boolean = true;

    @Emit()
    public toggle_sidebar() {
        this.sidebar_visible = !this.sidebar_visible
    }

}
