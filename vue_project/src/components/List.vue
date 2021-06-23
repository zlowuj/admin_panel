<template>
  <div id=list>
    <div class="text-right">
      <button type="button" class="btn btn-primary" style="position: relative" @click="gotoRegister">add user</button>
      <button type="button" class="btn btn-info" style="position: relative">show trainings</button>
    </div>
    <div id="userList" class="overflow-auto d-flex align-items-end" style="background-color: #eeeeee; border-style: groove; border-radius: 0.5em">
      <ol class="mb-3">
        <User
          v-for="item in this.$store.getters.userList"
          v-bind:user="item"
          v-bind:key="item.id"
        ></User>
      </ol>
    </div>
  </div>
</template>

<script>
import User from "./user.vue";
import { store } from "../store/index.js";
import axios from "axios";
//import https from "https";

/*const agent = new https.Agent({
  rejectUnauthorized: false,
});*/

export default {
  components: {
    User,
  },
  mounted() {
    this.requestUsers();
  },
  methods: {
    requestUsers() {
      axios
      .get("http://localhost:8082/api/getUsers", {
      })
      .then((response) => {
        if (response.status == 200) {
          store.commit("userList", response.data);
          console.log("zaladowano userow");
          console.log(this.$store.getters.userList);
        }
      })
      .catch((error) => console.log(error));
    },
    gotoRegister() {
      store.commit("changeRegister");
    },
  }
}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
#userList {
  height: 80vh;
}
.mb-3 {
  padding-top: 1vh;
  max-height: 80vh;
}
ol {
  display: inline-block;
  width: 100%;
  text-align: right !important;
}
</style>
