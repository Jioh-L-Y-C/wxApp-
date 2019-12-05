import { VantComponent } from '../common/component';
VantComponent({
    props: {
        title: String,
        border: {
            type: Boolean,
            value: true
        }
    },
    created() {
        console.log(this.data,777)
     
    },
});
