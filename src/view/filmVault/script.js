/**
 * Created by Lzhang on 2017/12/11.
 */
import pages from "./pags/index.vue"
export default {
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            total: 100,     // 记录总条数
            display: 20,   // 每页显示条数
            current: 1,   // 当前的页数

        }
    },
    computed: {

    },
    mounted() {
       // // this.home.changeCount();
       //  this.changeCount()
    },
    methods: {
        pagechange:function(currentPage){
            console.log(currentPage);
            // ajax请求, 向后台发送 currentPage, 来获取对应的数据

        }
    },
    components: {
        'v-pagination':pages
    }
}