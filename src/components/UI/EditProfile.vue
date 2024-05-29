<script>

import MyButton1 from "@/components/UI/MyButton1.vue";
import MyInput1 from "@/components/UI/MyInput1.vue";
import {generateGUID} from "@/api/helpers";
import {ElMessage} from "element-plus";
import {putFile, putUser} from "@/api/api";

export default {
  name: "EditProfile",
  components: {MyButton1, MyInput1},
  props: {
    user: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      editedName: '',
      editedLogin: '',
      editedTelegramId: '',
      editedAvatarFile: null,
      editedAvatarId: '',
      editedPassword : '',
    }
  },
  methods: {
    cancelEditing() {
      window.location.reload();
    },
    async onFileChange(event){
      this.editedAvatarFile = event.target.files[0];
      if (this.editedAvatarFile && (this.editedAvatarFile.type === "image/png" || this.editedAvatarFile.type === "image/jpeg")) {
        await this.addAvatar(this.editedAvatarFile);
      } else {
        ElMessage({
          message: 'Выберите корректный формат фотографии.',
          type: 'error',
          showClose: true,
        })
      }
    },
    async addAvatar(file) {
      this.editedAvatarId = generateGUID();
      const formData = new FormData();
      formData.append('fileName', `${this.user.login}_avatar`);
      formData.append('inputFile', file);
      formData.append('type', file.type);
      await putFile(this.editedAvatarId, `${this.user.login}_avatar`, formData);
    },
    async onSaveClick() {
      this.emptyChecker();
      const requestBody = {
        id: this.user.id,
        login: this.editedLogin,
        password: this.user.password,
        userMode: this.user.userMode,
        name: this.editedName,
        telegram: this.editedTelegramId,
        level: this.user.level,
        experience: this.user.experience,
        avatarId: this.editedAvatarId,
        permissions: this.user.permissions,
        userChallenges: this.user.userChallenges
      }
      await putUser(requestBody);
      window.location.reload();
    },
    emptyChecker() {
      if (this.editedAvatarId === '') {
        this.editedAvatarId = this.user.avatarId;
      }
      if (this.editedLogin === '') {
        this.editedLogin = this.user.login;
      }
      if (this.editedTelegramId === '') {
        this.editedTelegramId = this.user.telegram;
      }
      if (this.editedName === '') {
        this.editedName = this.user.name;
      }
      if (this.editedPassword === '') {
        this.editedPassword = this.user.password;
      }
    }
  },
  created() {
    this.isEditing = true;
  }
}
</script>

<template>
  <div class="modal-overlay">
    <div id="edit-profile-form">

      <div id="edit-fields-container">
        <input v-model="editedLogin" class="input-field" type="text" :placeholder="'Логин'">
        <input v-model="editedPassword" class="input-field" type="text" placeholder="Пароль"/>
        <input v-model="editedName" class="input-field" type="text" placeholder="Имя"/>
        <input v-model="editedTelegramId" class="input-field" type="text" placeholder="Телеграм"/>
      </div>

      <my-input1
          type="file"
          @change="onFileChange"
          accept="*.png"
          id="avatar-file"
          name-input="Загрузить новое фото профиля"/>

        <div id="buttons-container">
          <my-button1 id="button-edit" @click="cancelEditing" text-button="Отмена"></my-button1>
          <my-button1 id="button-edit" @click="onSaveClick" text-button="Сохранить"></my-button1>
        </div>

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
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}

#edit-profile-form {
  border: 1px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  background: black;
  padding: 20px;
  max-width: 400px;
  width: 100%;
}

#buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

#edit-fields-container {
  display: flex;
  flex-direction: column;
}

#avatar-file {
  display: flex;
}

#button-edit {
  width: 40%;
}

.input-field {
  width: 300px;
  height: 30px;

  font-size: 15px;
  font-weight: 300;

  /*вопросы, не меняется цвет текста в placeholder*/
  color: grey;
  background-color: #D9D9D9;
}

.input-field::placeholder {
  color: grey
}
</style>