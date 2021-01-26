import { Component, Vue } from 'vue-property-decorator'
import $ from 'jquery'
import 'metismenu'

@Component
export default class SidebarmenuComponent extends Vue {
    public isShown = false;

    private mounted() {
        $('#sidebar-menu1').metisMenu()
    }

}
