/**
 * Created by Lzhang on 2017/12/11.
 */
//import ChoiceWe from ".//index.vue"
import Todaything from '../../api/todaything/'
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            headbigdata: []
        }
    },
    created(){
        this.getIndexs();
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
    },
    methods: {
        async getIndexs(e = 94,mac='mac'){
            const data = e;
            const res = await Todaything.getTodayThingApi(data,mac);
            // dtaat1 = res.data.slice(1)
            const headbig = res.data.data.modules[0].elements.slice(0,1); //早间头条大图
            console.log(headbig);
            this.headbigdata = headbig;
        }
    }
}