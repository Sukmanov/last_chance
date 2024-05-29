<script>
export default {
  name: 'achievement-list',

  data() {
    return {
      achievements: [
        {id: 1, name: 'Achievement 1', text: 'Achievement 1 text'},
        {id: 2, name: 'Achievement 2', text: 'Achievement 2 text'},
        {id: 3, name: 'Achievement 3', text: 'Achievement 3 text'},
        {id: 4, name: 'Achievement 4', text: 'Achievement 4 text'},
        {id: 5, name: 'Achievement 5', text: 'Achievement 5 text'},
        {id: 6, name: 'Achievement 6', text: 'Achievement 6 text'},
        {id: 7, name: 'Achievement 7', text: 'Achievement 7 text'},
        {id: 8, name: 'Achievement 8', text: 'Achievement 8 text'},
        {id: 9, name: 'Achievement 9', text: 'Achievement 9 text'},
        {id: 1, name: 'Achievement 1', text: 'Achievement 1 text'},
        {id: 2, name: 'Achievement 2', text: 'Achievement 2 text'},
        {id: 3, name: 'Achievement 3', text: 'Achievement 3 text'},
        {id: 4, name: 'Achievement 4', text: 'Achievement 4 text'},
        {id: 5, name: 'Achievement 5', text: 'Achievement 5 text'},
        {id: 6, name: 'Achievement 6', text: 'Achievement 6 text'},
        {id: 7, name: 'Achievement 7', text: 'Achievement 7 text'},
        {id: 8, name: 'Achievement 8', text: 'Achievement 8 text'},
        {id: 9, name: 'Achievement 9', text: 'Achievement 9 text'},
      ],
      numPage: 1,
      limit: 9,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.achievements.length / this.limit);
    },
    paginatedAchievements() {
      const start = (this.numPage - 1) * this.limit;
      const end = start + this.limit;
      return this.achievements.slice(start, end);
    }
  },

  methods: {
    nextPage() {
      if (this.numPage < this.totalPages) {
        this.numPage++;
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
}
</script>

<template>
  <div>
    <div class="list">
      <div class="achievement-list" v-for="achievement in paginatedAchievements" :key="achievement.id">
        <achievement :Name="achievement.name" :Description="achievement.text"></achievement>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="numPage === 1">Previous</button>
      <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: numPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="numPage === totalPages">Next</button>
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
</style>
