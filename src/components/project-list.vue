<template>
  <div class="pr-sb-list-wrap">
    <p class="pr-sb-list-title">Project List</p>
    <ul class="pr-sb-list-ul">
      <li
        v-for="item in projectList"
        :key="item.id"
        @click="onProjectChange(item)"
        :class="[item.isActive?'active':'']"
      >
        <i class="dot" :style="{background: item.color}"></i>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="pr-sb-list-info">
      <Form :model="projectInfo" label-position="top">
        <FormItem label="项目名称">
          <Input type="text" v-model="projectInfo.name" />
        </FormItem>
        <FormItem label="描述">
          <Input
            v-model="projectInfo.desc"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          />
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectList: [
        {
          name: '安全云',
          id: '001',
          desc: 'seccloud',
          color: '#7f73fe'
        },
        {
          name: '云运维',
          id: '002',
          desc: 'yunyunwei',
          color: '#65cafe'
        },
        {
          name: 'SDN',
          id: '003',
          desc: 'sssddddnnn',
          color: '#fe74af'
        }
      ],
      projectInfo: {
        id: '123',
        name: '安全云',
        desc: 'desss'
      }
    }
  },
  methods: {
    onProjectChange (item) {
      this.projectInfo.name = item.name
      this.projectInfo.desc = item.desc
      this.projectList.forEach(pItem => (pItem.isActive = false))
      item.isActive = true
    }
  }
}
</script>

<style lang="less">
.pr-sb-list-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  @import url('./siderbar-list.less');
}
</style>
