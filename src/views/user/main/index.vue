<template>
  <div class="user flex-center">
    <UserCard
      :articles="myArticles"
      :user="user"
      :loaded="loaded"
      :marked="markedArticles"
      @toUpload="toUpload"
      @toTechies="toTechies"
    />
  </div>
</template>

<script>
import UserCard from "./components/user-card.vue";

import {
  QueryArticlesByUser,
  QueryCurrentUser,
  QueryMarkedArticles,
} from "@/requests";
import { reactive, ref } from "vue";

export default {
  components: {
    UserCard,
  },
  setup() {
    //查询我的文章，懒加载
    let myArticles = ref([]);
    let markedArticles = ref([]);
    let loaded = ref(false);
    // 查询当前用户
    let user = reactive({ data: {} });

    Promise.all([
      QueryCurrentUser(),
      QueryArticlesByUser(),
      QueryMarkedArticles(),
    ]).then((res) => {
      console.log(res);
      loaded.value = true;
      let [currUser, articlesByUser, marked] = res;
      console.log(currUser);
      user.data = currUser;
      articlesByUser.forEach((element) => {
        myArticles.value.push(element);
      });
      marked &&
        marked.forEach((element) => {
          markedArticles.value.push(element);
        });
      console.log(markedArticles);
    });

    return {
      myArticles,
      user,
      markedArticles,
      loaded,
    };
  },
  methods: {
    toUpload: function () {
      this.$router.push({
        path: "/techies/publish",
      });
    },

    toTechies: function () {
      this.$router.push({
        path: "/techies",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
