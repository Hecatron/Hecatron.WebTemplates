import { Component, Vue } from 'vue-property-decorator'
import { TopnavbarEvents } from 'common/eventbus'

@Component
export default class LeftsidemenuComponent extends Vue {

    public show_leftsidemenu = true;

    private mounted() {

        // Handle click event from top navbar
        TopnavbarEvents.$on('toggle-leftsidemenu', () => {
            this.show_leftsidemenu = !this.show_leftsidemenu
        })

    }

}
