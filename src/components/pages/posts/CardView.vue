<template>
  <div class="card">
    <div class="card-header">
      <router-link
        :to="{ name: 'postId', params: { id: post.id } }"
      >{{ post.title }}</router-link>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body : {{ post.body }}</li>
    </ul>
 
  </div>
</template>
<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type Post from "@/types/post";
export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup() {},
});
</script>
