<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4">
        <PostCardView :post="post" />
        <div class="card-footer">
          <button class="btn brn-sm btn-danger me-4">Delete</button>
          <button class="btn brn-sm btn-dark me-4">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import PostCardView from "@/components/pages/posts/CardView.vue";
import PostsService from "@/services/PostService";
import type ResponseData from "@/types/ResponseData";
import type Post from "@/types/post";
export default defineComponent({
  components: {
    PostCardView,
  },
  setup() {
    const post = ref({} as Post);
    const loading = ref(true);

    const route = useRoute();
    function getPost() {
      PostsService.get(route.params.id)
        .then((response: ResponseData) => {
          console.log(response.data);
          post.value = response.data;
          loading.value = false;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
    getPost();

    return { post, loading };
  },
});
</script>
