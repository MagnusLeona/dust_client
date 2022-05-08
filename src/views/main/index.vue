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
          title: "Todos",
          content: "To contribute greater efficiency",
          color: "#7f51c5",
          url: "/missions",
          component: "FunctionTodos",
        },
        {
          title: "Techies",
          content: "Let techies design your output !",
          color: "#008386",
          url: "/techies",
          component: "FunctionTechies",
        },
        {
          title: "Stories",
          content: "How about share your experienced thought ?",
          color: "#df63e4",
          url: "/tellers",
          component: "FunctionTellers",
        },
        {
          title: "Whats more?",
          content:
            "More functions are on the way, and you can tell us what you need for our inspiration ...",
          color: "#007700",
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