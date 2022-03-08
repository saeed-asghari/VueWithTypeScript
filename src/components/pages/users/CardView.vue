<template>
  <div class="card">
    <div class="card-header">
      <router-link
        :to="{ name: 'userId', params: { id: user.id } }"
      >{{ user.name }}</router-link>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username : {{ user.username }}</li>
      <li class="list-group-item">Email : {{ user.username }}</li>
      <li class="list-group-item">Phone : {{ user.phone }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import type { PropType } from "vue";
import { defineComponent } from "vue";
import type User from "@/types/user";
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup() {},
});
</script>
