import { Component, Vue } from 'vue-property-decorator'
import SidebarmenuComponent from './sidebarmenu.vue'
//import { TopnavbarEvents } from 'common/eventbus'

@Component({
    components: {
        SidebarmenuComponent,
    },
})
export default class SidebarComponent extends Vue {

    //public toggsidebar_mobile = false;
    //public toggsidebar_desktop = true;

    private mounted() {

        // Handle click event from top navbar
        //TopnavbarEvents.$on('toggle-sidebar-desktop', () => {
        //    this.toggsidebar_desktop = !this.toggsidebar_desktop
        //})
        // Handle click event from top navbar
        //TopnavbarEvents.$on('toggle-sidebar-mobile', () => {
        //    this.toggsidebar_mobile = !this.toggsidebar_mobile
        //})

    }
}
