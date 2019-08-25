<template>
  <div class="pr-dev-list-wrap">
    <p class="pr-sb-list-title">Developer List</p>
    <ul class="pr-sb-list-ul">
      <li
        v-for="item in developerList"
        :key="item.id"
        @click="onDeveloperChange(item)"
        :class="[item.isActive?'active':'']"
      >
        <div class="avatar" :style="{'background-image': `url('${item.avatar}')`}"></div>
        <!-- <i class="dot" :style="{background: item.color}"></i> -->
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      developerList: [
        {
          name: '施旺旺',
          id: '14699',
          desc: 'seccloud',
          avatar: '/static/image/developer/14699.jpg'
        },
        {
          name: '王甜甜',
          id: '14700',
          desc: 'yunyunwei',
          avatar: '/static/image/developer/14700.jpg'
        },
        {
          name: '赵程委',
          id: '15100',
          desc: 'sssddddnnn',
          avatar: '/static/image/developer/15100.jpg'
        }
      ],
      developerInfo: {
        id: '14699',
        name: '施旺旺',
        desc: 'desss'
      }
    }
  },
  methods: {
    onDeveloperChange (item) {
      this.developerInfo.name = item.name
      this.developerInfo.desc = item.desc
      this.developerList.forEach(pItem => (pItem.isActive = false))
      item.isActive = true
    }
  }
}
</script>

<style lang="less">
.pr-dev-list-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  @import url('./siderbar-list.less');
}
</style>
