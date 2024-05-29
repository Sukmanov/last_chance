<script>
  import {getChallenge} from "@/api/api";

  export default {
    name: 'achievement-list',
    props: {
      challenges: {
        type: Array,
        required: true
      }
    },
    async created() {
      if (this.challenges !== null) {
        for (let i = 0; i < this.challenges?.length; i++) {
          const userChallenge = await getChallenge(this.challenges[i].challengeId);
          this.userChallenges.push(userChallenge);
        }
      }
    },
    data() {
      return {
        userChallenges: [],
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
    <div class="achievement-list" v-for="userChallenge in userChallenges" :key="userChallenge.id">
      <achievement :achievement="userChallenge" id="challenge"></achievement>
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