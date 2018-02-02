<template>
    <div id="appFilm">
        <div class="banner">
            <p>频道 :</p>
            <ul>
                <li v-for="title in titles" :key="title.clickUrl" :class="{'active':activeName ==title.clickUrl}" @click="getCategories(title.clickUrl,1)">
                    <a href="#" >{{title.name}}</a>
                </li>
            </ul>
        </div>
        <div class="sort">
            <p>排序 :</p>
            <div class="hot" :class="(flag==false)?'selected':''" @click="orderByPlay">
                <i>✔</i>
                <p>热门</p>
            </div>
            <div class="uptime" :class="(flag==true)?'selected':''" @click="orderByTime">
                <i>✔</i>
                <p>更新时间</p>
            </div>
        </div>
        <div class="vault">
            <ul>
                <li v-for="(data,index) in list" :key="index" class="video-list">
                    <div class="filmImg">
                        <img :src=data.poster alt="" class="video-img">
                        <div class="box-mark" @click="playVideo(data)">
                            
                        </div>
                        <div class="filmImg-title clear">
                            <p style="left:0.06rem">{{data.duration.substr(1)}}</p>
                            <p>{{data.playCountCn}}次</p>
                        </div>                      
                    </div>
                    <p class="play-text">{{data.title}}</p>
                    <img src="../../../static/img/play_big.png" alt="" class="play-img" @click="playVideo(data)">                 
                    <div class="introduce">
                        <div class="triangle-right"></div>
                        <div class="triangle-left"></div>
                        <div class="details">
                            <div class="clear">
                                <h4>{{data.title}}</h4>
                                <p class="details-time">时 长：<span>{{data.duration.substr(1)}}</span></p>
                                <p class="details-num">播放量：<span>{{data.playCountCn}}</span></p>
                                <div class="details-introduce-box clear">
                                    <p class="details-introduce">简介：<span class="details-introduce-text">{{!data.description?data.title:data.description}}</span></p>
                                </div>
                                
                            </div>                            
                            <h5 @click="playVideo(data)"><a href="##">立即播放</a></h5>
                        </div>
                    </div>
                </li>                            
            </ul>
        </div>
        
        <v-pagination :total="total" :currentPage='current' @pagechange="pagechange" :pagegroup=totalPages></v-pagination>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

