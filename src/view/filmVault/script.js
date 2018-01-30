/**
 * Created by Lzhang on 2017/12/11.
 */
import pages from "./pags/index.vue"
import server from '../../api/video-resource/video-main'
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            total: 100, // 记录总条数
            display: 20, // 每页显示条数
            current: 1, // 当前的页数
            list: [],
            titles : [],
            activeName : ''
        }
    },
    created(){
        // this.getList();
        this.getCategories();
    },
    computed: {

    },
    mounted() {
        // // this.home.changeCount();
        //  this.changeCount()

    },
    methods: {
        pagechange(currentPage) {
            const type = window.sessionStorage.getItem("type");
            this.getCategories(type, currentPage);
            // console.log(currentPage);
            // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        },
        
        async getCategories( e = 95, page=1 ) {
            // console.log(e)
            window.sessionStorage.setItem("type", e);
            const id = e;
            this.activeName = e;
            console.log(e)
            // this.$on("pagechange",(page)=>{
            //     console.log(page)
            // })
            const res = await server.getCategoryTagApi(id,page);
            // console.log(res)
            this.list = res.data.data.modules[1].elements
            this.titles = res.data.data.modules[0].navigation
        } 
    },
    components: {
        'v-pagination': pages
    }
}