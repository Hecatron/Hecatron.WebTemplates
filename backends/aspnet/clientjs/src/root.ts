import { Component, Vue } from 'vue-property-decorator'
import HeaderComponent from './dashboard/header.vue'
import LeftsidemenuComponent from './dashboard/leftsidemenu.vue'
import FooterComponent from './dashboard/footer.vue'

@Component({
    components: {
        HeaderComponent,
        LeftsidemenuComponent,
        FooterComponent
    },
})
export default class RootComponent extends Vue {
}
