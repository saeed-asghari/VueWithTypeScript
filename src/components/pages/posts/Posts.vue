<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div class="ml-5">
        <router-link class="btn btn-dark" :to="{ name: 'createPost' }"
          >Create Post</router-link
        >
      </div>
      <div v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
        <PostCardView :post="post" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PostCardView from "@/components/pages/posts/CardView.vue";
import ApiService from "@/services/ApiService";
import type ResponseData from "@/types/ResponseData";
import type Post from "@/types/user";
import { useRoute } from "vue-router";
import {apiPath} from "@/config";
export default defineComponent({
  components: {
    PostCardView,
  },
  setup() {
    const posts = ref([] as Post[]);
    const loading = ref(true);
    const route = useRoute();
    function getPosts() {
      ApiService.getAll(apiPath.posts)
        .then((response: ResponseData) => {
          console.log(response.data);
          posts.value = response.data;
          loading.value = false;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
    getPosts();

    return { posts, loading, route };
  },
});
</script>
