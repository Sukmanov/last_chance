<script>

  export default {
    name: 'my-input-1',

    props: {
      nameInput: {
        type: String,
        required: true,
      }
    },

    data() {
      return {
        title: '',
      }
    },

    methods: {
      inputTitle(event) {
        this.title = event.target.value;
      }
    }


  }
</script>

<template>
  <input
      v-bind:value="title"
      @input="inputTitle"
      :placeholder="nameInput"
      type="text"
      class="input-field"
  >
</template>

<style>

.input-field {
  width: 300px;
  height: 30px;

  font-size: 15px;
  font-weight: 300;

  /*вопросы, не меняется цвет текста в placeholder*/
  color: grey;
  background-color: #D9D9D9;
}

.input-field::placeholder {
  color: grey
}

</style>