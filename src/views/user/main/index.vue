<template>
  <div class="user flex-center">
    <UserCard :articles="myArticles" :user="user" />
  </div>
</template>

<script>
import UserCard from "./components/user-card.vue";

import { QueryArticlesByUser, QueryCurrentUser } from "@/requests";
import { reactive, ref } from "vue";

export default {
  components: {
    UserCard,
  },
  setup() {
    //查询我的文章，懒加载
    let myArticles = ref([]);
    // 查询当前用户
    let user = reactive({ data: {} });

    Promise.all([QueryCurrentUser(), QueryArticlesByUser()]).then((res) => {
      let [currUser, articlesByUser] = res;
      console.log(currUser);
      user.data = currUser;
      articlesByUser.forEach((element) => {
        myArticles.value.push(element);
      });
    });

    return {
      myArticles,
      user,
    };
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
