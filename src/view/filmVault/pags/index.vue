<template>
    <footer>
        <ul class="pagination">
            <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> 上一页 </a></li>
            <li v-for="(p,i) in grouplist" :key="i" :class="{'active': current == p.val}"><a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a></li>
            <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> 下一页</a></li>
        </ul>
    </footer>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

