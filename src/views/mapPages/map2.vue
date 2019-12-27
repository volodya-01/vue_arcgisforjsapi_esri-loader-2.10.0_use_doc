<template>
  <div id="map2">
    <webmap2 />
  </div>
</template>

<script>
import webmap2 from "@/components/webmap2";
export default {
  name: "map2",
  components: {
    webmap2
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
#map2 {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
