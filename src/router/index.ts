import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView.vue";
import ShowUserView from "../views/ShowUserView.vue";
import PostsView from "../views/PostsView.vue";
import ShowPostView from "../views/ShowPostView.vue";
import CreatePostView from "../views/CreatePostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users",
      name: "users",
      component: UsersView,
    
    },
    {
      path: "/users/:id",
      name: "userId",
      component: ShowUserView,
    
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsView,
    
    },
    {
      path: "/posts/:id",
      name: "postId",
      component: ShowPostView,
    
    },
    {
      path: "/posts/create",
      name: "createPost",
      component: CreatePostView,
    
    },
  ],
});

export default router;