<script>
  export default {
    name: 'achievement-list',

    data() {
      return {
        arguments: [
          {id: 1, name: 'Achievement 1', text: 'Achievement 1 text'},
          {id: 2, name: 'Achievement 2', text: 'Achievement 2 text'},
          {id: 3, name: 'Achievement 3', text: 'Achievement 3 text'},
        ]
      }
    }
  }
</script>

<template>
  <div class="list">
    <div class="achievement-list" v-for="achievement in arguments">
      <achievement :Name="achievement.name" :Description="achievement.text"></achievement>
    </div>
  </div>

</template>

<style>

.list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 0 auto;
}

</style>