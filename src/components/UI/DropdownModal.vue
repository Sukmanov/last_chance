<script>
export default {
  props: ['options'],
  data() {
    return {
      selectedOptions: []
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    confirmSelection() {
      this.$emit('select', this.selectedOptions);
      this.close();
    }
  }
};
</script>

<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <div v-for="option in options" :key="option" class="option">
        <input type="checkbox" :id="option" :value="option" v-model="selectedOptions">
        <label :for="option">{{ option }}</label>
      </div>
      <button @click="confirmSelection">Выбрать</button>
    </div>
  </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}

.option {
  margin: 10px 0;
}

button {
  margin-top: 10px;
}
</style>
