<template>
    <div>
        <listLayout v-for="item, index in demoData" :key="index" :dataSource="item"></listLayout>
    </div>
</template>

<style scoped lang="less" src="./style.less"></style>
<script src="./script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

