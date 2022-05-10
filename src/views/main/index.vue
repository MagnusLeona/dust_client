<template >
  <div class="main-container">
    <function-list
      :cardConfigs="cardConfigs"
      @toRoute="toRoute"
    ></function-list>
  </div>
</template>

<script>
import FunctionList from "./components/function-list.vue";
export default {
  components: {
    FunctionList,
  },
  data() {
    return {
      cardConfigs: [
        {
          title: "Techies",
          content: "Let techies design your output !",
          url: "/techies",
          component: "FunctionTechies",
        },
        {
          title: "Todos",
          content: "To contribute greater efficiency",
          url: "/mission",
          component: "FunctionTodos",
        },
        {
          title: "Stories",
          content: "How about share your experienced thought ?",
          url: "/stories",
          component: "FunctionTellers",
        },
        {
          title: "Whats more?",
          content:
            "More functions are on the way, and you can tell us what you need for our inspiration ...",
          url: "/login",
          component: "FunctionMore",
        },
      ],
    };
  },
  methods: {
    toRoute: function (url) {
      this.$router.push({
        path: url,
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>