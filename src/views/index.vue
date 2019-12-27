<template>
  <div class="views">
    <div class="views_outbox">
      <div class="tabsoutbox">
        <router-link
          v-for="(item, index) in routesList"
          :key="index"
          :to="{ path: item.meta.pathUrl, params: { id: 123 } }"
          replace
          active-class="activeClass"
          class="routerLinkStyle"
          tag="div"
          >{{ item.meta.title }}</router-link
        >
      </div>
      <div class="mapoutbox">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "views",
  data() {
    return {
      routesList: null
    };
  },
  created() {
    this.getroutesList();
  },
  watch: {
    $route() {
      this.getroutesList();
    }
  },
  methods: {
    getroutesList() {
      let newroutes = [...this.$router.options.routes[0].children];
      this.routesList = newroutes.filter(
        item => (item.meta.pathUrl = "/" + item.path)
      );
      console.log(newroutes);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/styles/global.scss";
.views {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: vw(1920);
  height: vh(1080);
  .views_outbox {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: vw(1880);
    height: vh(1040);
    border: 1px solid #ccc;
    .tabsoutbox {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: vw(1880);
      height: vh(40);
      border-bottom: 1px solid #ccc;
      .routerLinkStyle {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: vh(40);
        color: #2c3e50;
        font: normal vh(18) "微软雅黑";
        cursor: pointer;
        border-right: 1px solid #ccc;
        &:last-child {
          border-right: none;
        }
      }
      .activeClass {
        font: normal vh(18) "微软雅黑";
        color: #fff;
        background-color: #42b983;
      }
    }
    .mapoutbox {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: vw(1880);
      height: vh(1000);
      /*  background-color: #42b983; */
    }
  }
}
a {
  color: #42b983;
}
</style>
