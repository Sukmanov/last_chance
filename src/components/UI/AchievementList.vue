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
        numPage: 1,
        limit: 9,
      }
    },
    prevPage() {
      if (this.numPage > 1) {
        this.numPage--;
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.numPage = page;
      }
    }
  }
</script>

<template>
  <div>
    <div class="list">
      <div class="achievement-list" v-for="userChallenge in userChallenges" :key="userChallenge.id">
        <achievement :achievement="userChallenge"></achievement>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage"
              :disabled="numPage === 1"
              id="page-btn"
      >Previous</button>
      <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: numPage === page }"
          id="page-btn"
      >
        {{ page }}
      </button>
      <button @click="nextPage"
              :disabled="numPage === totalPages"
              id="page-btn"
      >Next</button>
    </div>
  </div>

</template>

<style>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 0 auto;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination button.active {
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
}

#page-btn {
  border: none;
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: grey;
  background: transparent;
}

#page-btn:hover {
  text-decoration: underline;
}
</style>