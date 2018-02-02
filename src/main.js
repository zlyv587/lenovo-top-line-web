import Vue from 'vue';
import App from './App';
import router from './router';
// promise兼容ie，处理axios菜蔬
import 'babel-polyfill';
// 初始化全局http回调
import {init} from './common/request.js';

import './main.less';

import player from './common/player';
console.log(player.checkAqyExeInstalled)

window.error = function(msg) {
    alert(msg);
}
player.checkAqyExeInstalled() // 检测是否安装了爱奇艺播放器
Vue.prototype.$bus = new Vue();

/* eslint-disable no-new */
console.log('============================================');
console.log('执行了main代码');
// 图片懒加载
Echo.init({
    offset: 900,
    throttle: 0
});
const vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});

init({
    success(res) {

        // vm.$message.success('操作成功');
    },
    error(err) {

    }
});

$(function () {
    $(".nano").nanoScroller();
    $('.nano-content').scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $("#backToTop").fadeIn(500);
        } else {
            $("#backToTop").fadeOut(500);
        }
    });
});

