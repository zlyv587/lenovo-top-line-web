/**
 * Created by wangJie on 2017/5/24.
 */
export default {
    // getMenuList: '/lepro/admin/awardaddress/list', // 获取左侧菜单数据
    //todaythingUrl: '/indexNewsChannel/{channelId}?relativeId=43&lSrc=pc&mac=mac'
    // categoryTagUrl(id) {
    //     return `/topLine/indexNewsMoreChannel/${id}`
    // }
    todaythingUrl(data){
        return `/topLine/indexNewsChannel/${data}`
    }
}