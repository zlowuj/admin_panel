<template>
  <div class="input-group mb-3">
    <li style="background-color: #f5f542; color: black; display: table !important; text-align: left; font-size: 1.5em" id="left">
      <strong>id: {{ user.id }}; email: {{user.email}}; imie: {{user.name}}; nazwisko: {{user.surname}}</strong>
    </li>
    <div style="text-align: right; margin-left: 10px">
      <button type="button" class="btn btn-danger" @click="deleteUser">
        delete
      </button>
      <button type="button" class="btn btn-info" @click="showTrainings">
        trainigs
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store/index.js";
export default {
  components: {
  },
  data() {
    return {
      id: this.user.id,

    };
  },
  methods: {
    deleteUser() {
      axios
      .delete("http://localhost:8082/api/delete/"+this.user.id, {
      })
      .then((response) => {
        if (response.status == 200) {
          console.log("usunieto usera");
          console.log("http://localhost:8082/api/delete/"+this.user.id);
        }
      })
      .catch((error) => console.log(error));
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
      location.reload();
    },
    showTrainings() {
      axios
      .get("http://localhost:8082/api/training/"+this.user.id+"/getTrainings", {
      })
      .then((response) => {
        if (response.status == 200) {
          store.commit("trainigs", response.data);
          console.log("zaladowano treningi");
          console.log(this.$store.getters.trainigs);
        }
      })
      .catch((error) => console.log(error));
      store.commit("changeTrainings");
    }
  },
  props: ["user"],
};
</script>

<style scoped>
li {
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 0.2em;
  border-radius: 5px;
  border-color: black;
}
</style>
