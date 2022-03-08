<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4">
        <UserCardView :user="user" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import UserCardView from "@/components/pages/users/CardView.vue";
import UserService from "@/services/UserService";
import type ResponseData from "@/types/ResponseData";
import type User from "@/types/user";
export default defineComponent({
  components: {
    UserCardView,
  },
  setup() {
    const user = ref({} as User);
    const loading = ref(true);
    
    const route =useRoute();
    function getUser() {
      UserService.get(route.params.id)
        .then((response: ResponseData) => {
          console.log(response.data);
          user.value = response.data;
          loading.value =false
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
    getUser();

    return { user, loading };
  },
});
</script>
