<script>
  export default {
    name: "comments-list",

    props: {
      comments: {
        type: Array,
        required: true,
      }
    },

    data() {
      return {
        comments2: [
          {id: 1, username: 'ivan petrov', comment: "i like it"},
          {id: 2, username: 'ivan petrov', comment: "i dont like it"},
          {id: 3, username: 'ivan petrov', comment: "i am going to watch"},
        ]
      }
    }
  }
</script>

<template>
  <div class="comments-list" v-for="comment1 in comments">
    <comment :Rating="comment1.rank" :Nickname="comment1.username" :Comment="comment1.comment"></comment>
  </div>
</template>

<style>

</style>