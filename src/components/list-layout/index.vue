<template>
  <div :id="dataSource.styleType ? 'layoutListWrap' : ''" class="layout-list-wrap" :class="dataSource.styleType ? displayType[dataSource.styleType] : ''">
      <ul v-if="demo"  class="list-wrap-content">
          <li class="list-wrap-item" v-for="item, index in demo" :key="index" >
              <listItem :dataSource="demo">{{demo}}</listItem>
          </li>
      </ul>
      <ul v-else class="list-wrap-content">
        <li class="list-wrap-item" :class="dataSource.styleType === 'H1D8-J5' && index >= dataSource.elements.length - 5 ? 'one-col-style' : ''" v-for="item, index in dataSource.elements" :key="index" >
            <listItem :dataSource="item">{{item}}</listItem>
        </li>
        </ul>
      <div @click="handleChangeData" style="position: absolute;bottom: 0;left: 0;z-index: 9999">换一换 {{dataSource.styleType}}</div>
  </div>
</template>

<style lang="less" src="./style.less"></style>
<script src="./script.js"></script>




