import { TopnavbarEvents } from 'common/eventbus'
import { Component, Vue } from 'vue-property-decorator'
import SidebarmenuComponent from './sidebarmenu.vue'

import $ from 'jquery'

@Component({
    components: {
        SidebarmenuComponent,
    },
})
export default class SidebarComponent extends Vue {

    private mounted() {
        // Handle click event from top navbar
        TopnavbarEvents.$on('toggle-sidebar', () => {
            $('#app-dashboard-sidebar').foundation('toggle')
        })
        // Open the sidebar automatically on load if the page is not on mobile
        if (Foundation.MediaQuery.atLeast('medium')) {
            $('#app-dashboard-sidebar').foundation('open')
        }
    }
}
