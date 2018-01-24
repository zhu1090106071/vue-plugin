import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Draggable from '@/components/vuedraggable'
import Echarts from '@/components/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/draggable',
      name: 'Draggable',
      component: Draggable
    },{
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }
  ]
})
