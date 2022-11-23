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
import { ref } from 'vue';

export default {
  emits: ['save'],
  setup(_, context) {
    const text = ref('');
    const save = () => {
      const post = {
        text: text.value,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "ALXhxjwgY9PinwNGHpfai6OWyDu2",
      };
      text.value = "",
      context.emit("save", { post })
    }
    return {text, save}
  }
}
</script>


<style></style>
