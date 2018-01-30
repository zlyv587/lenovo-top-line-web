/**
 * Created by zhang on 2017/5/17.
 */
import {fetch} from  '../../../common/request';
import serviceUrl from './serviceUrl';

export default {
    getCategoryTagApi(id,page) {
        return fetch().get(serviceUrl.categoryTagUrl(id), {
            relativeId : 43,
            lSrc : 'pc',
            page             
        });
    }
}
