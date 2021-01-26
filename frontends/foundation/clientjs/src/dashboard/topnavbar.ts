import { TopnavbarEvents } from 'common/eventbus'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TopnavbarComponent extends Vue {

    private toggle_sidebar_click(event: Event) {
        // Throw an event up to the parent control
        TopnavbarEvents.$emit('toggle-sidebar')
    }
}
