<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <form>
          <label class="form-label">Title:</label>
          <input
            type="text"
            class="form-control"
            v-model.lazy.trim="form.title"
          />

          <label class="form-label">Body:</label>
          <textarea
            class="form-control"
            v-model.lazy.trim="form.body"
          ></textarea>

          <button
            type="submit"
            class="btn btn-success mt-2"
            :disabled="buttonLoading"
          >
            <div
              v-if="buttonLoading"
              class="spinner-border spinner-border-sm"
              role="status"
            ></div>
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "postForm",
  props: {
    post: Object,
     buttonLoading: Boolean,
  },

  setup(props) {
    const form = reactive({
      title: "",
      body: "",
    });

    function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();

    return { form };
  },
};
</script>

<style>
</style>