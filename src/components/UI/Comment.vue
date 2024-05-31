<script>
  import {deleteComment} from "@/api/api";
  import {ElButton} from "element-plus";
  import {Delete} from "@element-plus/icons-vue";


  export default {
    name: 'comment',
    computed: {
      Delete() {
        return Delete
      }
    },
    components: {
      ElButton,
    },
    props: {
      Nickname: {
        type: String,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
      Id: {
        type: String,
        required: true,
      },
      Rating: {
        type: Number,
        required: true,
      }
    },

    data() {
      return {
        isAdmin: true,
      }
    },
    methods: {
      async clickOnDelete() {
        await deleteComment(this.Id);
      }
    }
  }
</script>

<template>
  <div class="comment">
    <div id="comment-info">
      <span id="nickname">{{ Nickname }}&nbsp;&nbsp;&nbsp;&nbsp;{{ Rating }}</span>
      <span style="color: #FFB800; font-size: 22px;">★</span>
      <p id="comment-text">{{Comment}}</p>
    </div>

    <div id="delete_btn" v-if="isAdmin">
      <el-button
          id="achievement__btn"
          type="danger"
          :icon="Delete"
          circle
          @click="clickOnDelete"
      ></el-button>
    </div>
  </div>
</template>

<style>

#comment-text {
  display: flex;
  justify-content: space-between;
}

#nickname {
  font-size: 20px;
  font-weight: 500;
  font-family: "Rubik", sans-serif;
  color: white;
}

#comment-text {
  font-size: 20px;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
  color: white;
}

.comment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 10px auto;
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  padding: 10px 10px 10px 10px;
}

#delete_btn {
  margin-right: 20px;
  margin-bottom: 20px;
}

</style>