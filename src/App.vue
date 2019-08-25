<template>
  <div id="app">
    <Row class="pr-height-full">
      <i-Col span="6" class="pr-height-full">
        <sideBar></sideBar>
      </i-Col>
      <i-Col span="16" offset="2" class="pr-height-full">
        <!-- <i-Input type="text"></i-Input> -->
      </i-Col>
    </Row>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
