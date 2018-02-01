/**
 * Created by wangJie on 2017/5/24.
 */
import {fetch} from  '../../common/request';
import serviceUrl from './serviceUrl';

export default {
    // getMenuList(data) {
    //     return fetch().get(serviceUrl.getMenuList, {params: data});
    // }, // 获取左侧菜单数据
    getTodayThingApi(data,mac){
        return fetch().get(serviceUrl.todaythingUrl(data),{
            relativeId : 43,
            lSrc : 'pc',
            mac
        }); //获取今日要事首页数据
    }

}
