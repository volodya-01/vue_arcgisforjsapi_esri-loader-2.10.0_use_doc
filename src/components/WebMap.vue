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
