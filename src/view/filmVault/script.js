/**
 * Created by Lzhang on 2017/12/11.
 */
import pages from "./pags/index.vue"
import server from '../../api/video-resource/video-main'
import player from '../../common/player'
export default {
    data() {
        return {
            total: 200, // 记录总条数
            display: 25, // 每页显示条数
            current: 1, // 当前的页数
            list: [],
            titles: [],
            totalPages: 1,
            activeName: '',
            type: '',
            orderBy: 'play',
            flag: false,
            description :'1'            
        }
    },
    created() {
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
            this.current = currentPage;
            this.getCategories(this.type, currentPage, this.orderBy);
        },
        async getCategories(e = 0, page = 1, orderBy = this.orderBy) {
            this.type = e;
            const id = e;
            this.activeName = e;
            this.current = page;
            const res = await server.getCategoryTagApi(id, page, orderBy);//向后台发送三个参数（频道id,当前的页数，排序）
            console.log(res)
            this.list = res.data.data.modules[1].elements;
            this.titles = res.data.data.modules[0].navigation;
            this.totalPages = res.data.data.totalPages;
            this.total = res.data.data.totalNumber;             
        },
        orderByPlay() {
            this.flag = false
            this.orderBy = 'play'
            this.getCategories(this.type, this.current, this.orderBy);
        },
        orderByTime() {
            this.flag = true
            this.orderBy = 'time'
            this.getCategories(this.type, this.current, this.orderBy);
        },
        playVideo: player.playVideo
    },
    components: {
        'v-pagination': pages
    }
}