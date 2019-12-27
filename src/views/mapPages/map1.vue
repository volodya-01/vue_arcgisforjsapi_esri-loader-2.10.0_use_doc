<template>
  <div id="map1">
    <web-map />
  </div>
</template>

<script>
import WebMap from "@/components/WebMap.vue";

export default {
  name: "map1",
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
