<template>
    <div id="appFilm">
        <div class="banner">
            <p>频道 :</p>
            <ul>
                <!-- <li class="selected">
                    <a href="#">全部</a>
                </li> -->
                <li v-for="title in titles" :key="title.clickUrl" :class="{'active':activeName ==title.clickUrl}" @click="getCategories(title.clickUrl)">
                    <a href="#" >{{title.name}}</a>
                </li>
            </ul>
        </div>
        <div class="sort">
            <p>排序 :</p>
            <div class="hot selected">
                <i>✔</i>
                <p>热门</p>
            </div>
            <div class="uptime">
                <i>✔</i>
                <p>更新时间</p>
            </div>
        </div>
        <div class="vault">
            <ul>
                <li v-for="data in list" :key= 'data.outAlbumId' class="video-list">
                    <div class="filmImg">
                        <img :src=data.poster alt="" class="video-img">
                        <div class="box-mark">
                            
                        </div>
                        <div class="filmImg-title clear">
                            <p style="left:0.06rem">{{data.duration.substr(1)}}</p>
                            <p>{{data.playCountCn}}</p>
                        </div>                      
                    </div>
                    <p class="play-text">{{data.title}}</p>
                    <img src="../../../static/img/play_big.png" alt="" class="play-img">                 
                    <div class="introduce">
                        <div class="triangle-right"></div>
                        <div class="triangle-left"></div>
                        <div class="details">
                            <div class="clear">
                                <h4>{{data.title}}</h4>
                                <p class="details-time">时 长：<span>{{data.duration.substr(1)}}</span></p>
                                <p class="details-num">播放量：<span>{{data.playCountCn}}</span></p>
                                <p class="details-introduce">简介：<span>{{data.description}}</span></p>
                            </div>                            
                            <h5><a href="">立即播放</a></h5>
                        </div>
                    </div>
                </li>                            
            </ul>
        </div>
        
        <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

