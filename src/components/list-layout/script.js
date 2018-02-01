import listItem from '../list-item/index.vue';
export default {
    components: {
        listItem,
    },
    props: {
        dataSource: {// 每个 栏目 的数据
            type: Object,
        },
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            displayType: {
                'H1D8': 'two-col-large',
                'J5': 'one-col',
                'J5-J5': 'two-col',
                'J5-J5-J5': 'three-col',
                'G1': 'full-banner',
                'H1D8-J5': 'two-col-large-one-col'
            },
            demo: ''
        }
    },
    computed: {

    },
    mounted() {
        // // this.home.changeCount();
        //  this.changeCount()
    },
    methods: {
        handleChangeData() {
            this.demo = [
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
                }
            ]
        }
    }
}