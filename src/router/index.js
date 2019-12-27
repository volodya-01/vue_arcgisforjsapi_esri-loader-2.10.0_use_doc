import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'views',
      component:()=>import('@/views/index'),
      redirect:'/map1',
      children:[
        {
          path:'map1',
          name:'map1',
          component:()=>import('@/views/mapPages/map1'),
          meta:{
            title:'第一个地图',
            icon:'map1'
          }
        }, {
          path: 'map2',
          name: 'map2',
          component: () => import('@/views/mapPages/map2'),
          meta: {
            title: '第二个地图',
            icon: 'map2'
          }
        }, {
          path: 'map3',
          name: 'map3',
          component: () => import('@/views/mapPages/map3'),
          meta: {
            title: '第三个地图',
            icon: 'map3'
          }
        }, {
          path: 'map4',
          name: 'map4',
          component: () => import('@/views/mapPages/map4'),
          meta: {
            title: '第四个地图',
            icon: 'map4'
          }
        }, {
          path: 'map5',
          name: 'map5',
          component: () => import('@/views/mapPages/map5'),
          meta: {
            title: '第五个地图',
            icon: 'map5'
          }
        }, {
          path: 'map6',
          name: 'map6',
          component: () => import('@/views/mapPages/map6'),
          meta: {
            title: '第六个地图',
            icon: 'map6'
          }
        }
      ]
    }
  ]
})
