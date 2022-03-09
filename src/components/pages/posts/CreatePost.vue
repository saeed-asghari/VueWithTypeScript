<template>
  <div class="container mt-5">
    <div class="row g-3">
      <h2 class="mb-5">Create Post :</h2>
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-group col-5">
          <label>Title</label>
          <Field
            name="title"
            type="text"
            class="form-control"
            v-model.lazy="form.title"
            :class="{ 'is-invalid': errors.title }"
          />
          <div class="invalid-feedback">{{ errors.title }}</div>
        </div>
        <div class="form-group col-5">
          <label class="form-label">Body</label>

          <textarea
            name="body"
            class="form-control"
            v-model.lazy="form.body"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary" :disabled="loading">
          <div
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
          ></div>
          CreatePost
        </button>
      </Form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import ApiService from "@/services/ApiService";
import type ResponseData from "@/types/ResponseData";
import randomNumber from "@/utility/RandomNumber";
import Swal from "sweetalert2";

export default defineComponent({
  components: {
    Form,
    Field,
  },
  setup() {
    const apiPath = "/posts";
    const loading = ref(false);
    const schema = Yup.object().shape({
      title: Yup.string().required("Title is required"),
    });
    const form = reactive({
      title: "",
      body: "",
    });
    const onSubmit = () => {
      createPost();
      loading.value = true;
    };

    console.log(form);
    const createPost = () => {
      ApiService.create(apiPath, {
        title: form.title,
        body: form.body,
        userId: randomNumber(),
      })
        .then((response: ResponseData) => {
          Swal.fire({
            title: "Create",
            text: "Post Created successfulyl",
            icon: "success",
            confirmButtonText: "Ok",
          });
          loading.value = false;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
    return { form, schema, onSubmit, loading };
  },
});
</script>
