<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          id=""
          v-model="text"
          name=""
          cols="30"
          rows="10"
          class="form-input"
        />
      </div>
      <div class="form-actions">
        <button class="btn-blue">
          Submit Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    save() {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
      };
      this.text = "";
      this.$emit("save", { post });
    },
  },
};
</script>

<style></style>
