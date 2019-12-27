# vue2_arcgisfojsapi_demo

> A Vue.js project
## 预览页
> https://volodya-01.github.io/vue_arcgisforjsapi_esri-loader-2.10.0_use_doc_demo_overview-/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# vue_arcgisforjsapi_esri-loader@2.10.0使用步骤
## 1.安装esri-loader@2.10.0
npm install --save esri-loader@2.10.0

#### 注：esri-loader@2.10.0去掉logo等组件可以使用以下语法

  this.view.ui.remove(["attribution"])//移除logo
  this.view.ui.remove(["zoom"])//移除放大缩小按钮
  this.view.scale = 240000;//矢量服务设置比例

## 2.vue arcgisforjsapi地图组件
#### webMap.vue
<template>
  <div></div>
</template>

<script>
import { loadModules } from "esri-loader";

export default {
  name: "web-map",
  mounted() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(["esri/Map", "esri/views/MapView"], {
      css: true
    })
      .then(([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: "topo-vector"
        });

        this.view = new MapView({
          container: this.$el,
          map: map,
          center: [-118, 34],
          zoom: 8
        });
        this.view.ui.remove(["attribution"])//移除logo
        this.view.ui.remove(["zoom"])//移除放大缩小按钮
        this.view.scale = 240000;//矢量服务设置比例
      })
      .catch(err => {
        // handle any errors
        console.error(err);
      });
  },
  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>


## 3.在地图父组件mapshow.vue中使用webMap.vue组件
#### mapshow.vue
<template>
  <div id="map1">
    <web-map />
  </div>
</template>

<script>
import WebMap from "@/components/WebMap.vue";

export default {
  name: " mapshow",
  components: { WebMap }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#map1 {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>


