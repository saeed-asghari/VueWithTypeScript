<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardView :user="user" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import UserCardView from "@/components/pages/users/CardView.vue";
import ApiService from "@/services/ApiService";
import type ResponseData from "@/types/ResponseData";
import type User from "@/types/user";
import { useRoute } from "vue-router";
import {apiPath} from "@/config";
export default defineComponent({
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([] as User[]);
    const loading = ref(true);
    const route = useRoute();
    function getUsers() {
      ApiService.getAll(apiPath.users)
        .then((response: ResponseData) => {
          console.log(response.data);
          users.value = response.data;
          loading.value = false;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
    getUsers();

    return { users, loading, route };
  },
});
</script>
