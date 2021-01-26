import { Component, Vue } from 'vue-property-decorator'
import TopmenuComponent from './topmenu.vue'
import WincontrolComponent from './wincontrol.vue'
import WincontrolComponentClass from './wincontrol'


@Component({
    components: {
        TopmenuComponent,
        WincontrolComponent
    },
})
export default class TopbarComponent extends Vue {

    /** Determines if we're running under Chromely and therefor should show the top bar. */
    private isChromely: boolean = false;

    // Tell typescript what the types are for the refs
    $refs!: {
        wincontrol: WincontrolComponentClass;
    }

    private mounted() {

        // Check to see if we're running under Chromely
        fetch('/chromely/IsChromely')
            .then((response) => response.json() as Promise<boolean>)
            .then((data) => {
                this.isChromely = data
            })
    }

    private toggle_maxrestore() {
        this.$refs.wincontrol.toggleMaxRestore()
    }
}
