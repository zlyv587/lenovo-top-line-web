/**
 * Created by Lzhang on 2017/12/11.
 */
import ChoiceWe from ".//index.vue"
import listLayout from '../../components/list-layout/index.vue';
import Todaything from '../../api/todaything/'
const testData = [
    {
        name: 'zhang1'
    },
    {
        name: 'zhang2'
    },
    {
        name: 'zhang3'
    },
    {
        name: 'zhang4'
    },
    {
        name: 'zhang5'
    },
    {
        name: 'zhang6'
    },
    {
        name: 'zhang7'
    },
    {
        name: 'zhang8'
    },
    {
        name: 'zhang9'
    },
    {
        name: 'zhang10'
    },
    {
        name: 'zhang11'
    },
    {
        name: 'zhang12'
    },
    {
        name: 'zhang13'
    }
];
export default {
    components: {
        listLayout,
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            demoData: [
                {
                    type: 'H1D8',
                    data: testData,
                },
                {
                    type: 'J5',
                    data: testData,
                },
                {
                    type: 'J5-J5',
                    data: testData,
                },
                {
                    type: 'J5-J5-J5',
                    data: testData,
                },
                {
                    type: 'G1',
                    data: testData,
                },
                {
                    type: 'H1D8-J5',
                    data: testData,
                }
            ]
        }
    },
    computed: {

    },
    created(){
        this.getIndexs();
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
            console.log(res);
            this.headbigdata = headbig;
            this.demoData =  res.data.data.modules;
            console.log(this.demoData, 'this.demoData');
        }
    }
}