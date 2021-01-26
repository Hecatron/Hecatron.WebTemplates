import { TopnavbarEvents } from 'common/eventbus'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TopnavbarComponent extends Vue {

    // Throw an event up to the parent control

    // Used for larger non-mobile screens
    private toggle_sidebar_desktop_click(event: Event) {
        TopnavbarEvents.$emit('toggle-sidebar-desktop')
    }

    // Used for mobile screens
    private toggle_sidebar_mobile_click(event: Event) {
        TopnavbarEvents.$emit('toggle-sidebar-mobile')
    }
}
