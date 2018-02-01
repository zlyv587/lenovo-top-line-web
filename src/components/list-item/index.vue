<template>
    <div class="list-item-wrap">
        <a class="list-cover-wrap" >
            <img v-if="dataSource.elementType !== 'MAD'" src="http://pic5.qiyipic.com/image/20180129/7d/e9/v_114762810_m_601_480_270.jpg" alt="" class="video-img">
            <div v-if="dataSource.elementType !== 'MAD'" class="box-mark"></div>
            <div class="list-grad"  v-if="dataSource.elementType !== 'MAD'" >
                <div class="grad-left">00:11</div>
                <div class="grad-right">1.3万</div>
            </div>
            <img v-if="dataSource.elementType !== 'MAD'" src="../../../static/img/play_big.png" alt="" class="play-img">
            <div v-if="dataSource.elementType !== 'MAD'" class="introduce">
                <div class="triangle-right"></div>
                <div class="triangle-left"></div>
                <div class="details">
                    <div class="clear">
                        <h4></h4>
                        <p class="details-time">时 长：<span></span></p>
                        <p class="details-num">播放量：<span></span></p>
                        <p class="details-introduce">简介：<span></span></p>
                    </div>                            
                    <h5><a href="##">立即播放</a></h5>
                </div>
            </div>
        </a>
        
        <div v-if="dataSource.elementType !== 'MAD'" class="list-info-wrap">
            电影信息
        </div>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>





