<template>
  <div class="pr-sb-wrap pr-height-full">
    <div class="pr-sb-header">项目管理系统</div>
    <div class="pr-sb-list">
      <Tabs value="developer" class="pr-height-full">
        <TabPane label="项目" name="project" class="pr-height-full">
          <projectList></projectList>
        </TabPane>
        <TabPane label="人员" name="developer">
          <developerList></developerList>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import projectList from './project-list'
import developerList from './developer-list'
export default {
  components: {projectList, developerList},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@header-height:80px;
@boder-radius: 8px;
.pr-sb-wrap {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-top-left-radius: @boder-radius;
  border-bottom-left-radius: @boder-radius;
  .pr-sb-header {
    width: 100%;
    height: @header-height;
    line-height: @header-height;
    position:absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    text-align: center;
    background-color: #fff;
    font-size: 20px;
    font-weight: bolder;
    box-shadow: 0px 0px 5px #999;
    border-top-left-radius: @boder-radius;
  }
  .pr-sb-list {
    height: 100%;
    padding-top: (@header-height + 10px);
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    background-color: #f0f1f2;
    border-bottom-left-radius: @boder-radius;
  }
}
</style>
