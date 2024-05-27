<script>
export default {
  name: "test-arr-films",

  props: {
    films2: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      numPage: 1,
      limit: 2,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.films2.length / this.limit);
    },
    paginatedFilms() {
      const start = (this.numPage - 1) * this.limit;
      const end = start + this.limit;
      return this.films2.slice(start, end);
    }
  },

  methods: {
    nextPage() {
      if (this.numPage < this.totalPages) {
        this.numPage++;
      }
    },
    test() {
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
    <div class="arr-films" v-for="film in paginatedFilms" :key="film.id">
      <film
          :filmName="film.name"
          :filmDescription="film.description"
          :filmRating="film.rating"
          :film-img-path="film.img"
      >
      </film>
    </div>
    <div class="pagination">
      <button
          @click="test"
          :disabled="numPage === 1">Previous
      </button>
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
.arr-films {
  /* Styles for films */
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
