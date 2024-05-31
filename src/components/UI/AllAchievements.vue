<script>
import {getChallenge} from "@/api/api";

export default {
  name: 'all-achievements',
  props: {
    challenges: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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
    <div class="all__list">
      <div class="all__achievement-list" v-for="challenge in challenges" :key="challenge.id">
        <achievement :achievement="challenge"></achievement>
      </div>
    </div>
    <div class="all__pagination">
      <button @click="prevPage"
              :disabled="numPage === 1"
              id="all__page-btn"
      >Previous</button>
      <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: numPage === page }"
          id="all__page-btn"
      >
        {{ page }}
      </button>
      <button @click="nextPage"
              :disabled="numPage === totalPages"
              id="all__page-btn"
      >Next</button>
    </div>
  </div>

</template>

<style>
.all__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 0 auto;
}

.all__pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.all__pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}

.all__pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.all__pagination button.active {
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
}

#all__page-btn {
  border: none;
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: grey;
  background: transparent;
}

#all__page-btn:hover {
  text-decoration: underline;
}
</style>