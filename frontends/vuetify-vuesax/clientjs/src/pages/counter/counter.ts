import { Component, Vue } from 'vue-property-decorator'
import 'vuesax/dist/vuesax.css'

@Component
export default class CounterComponent extends Vue {
    public currentcount: number = 0;

    public active: number = 0;

    public value2: number = 0;

    private incrementCounter() {
        this.currentcount++
    }
}
