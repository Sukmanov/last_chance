<script>
export default {
  name: "test-comments-list",

  props: {
    comments: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      numPage: 1,
      limit: 5,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.comments.length / this.limit);
    },
    paginatedComments() {
      const start = (this.numPage - 1) * this.limit;
      const end = start + this.limit;
      return this.comments.slice(start, end);
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
    <div class="comments-list" v-for="comment1 in paginatedComments" :key="comment1.id">
      <comment :Rating="comment1.rank" :Nickname="comment1.username" :Comment="comment1.text" :Id="comment1.id"></comment>
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
.comments-list {
  /* Styles for comments list */
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
