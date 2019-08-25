import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import sideBar from './components/side-bar.vue'

@Component({
  components: {sideBar}
})
export default class App extends Vue{
  created () {
    console.log(`App created`)
  }
}