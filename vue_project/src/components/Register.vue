<template>
  <div class="container" id="body">
    <div class="row justify-content-center">
      <div class="col-4">
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal; text-center">
            Registration form:
          </h1>
          <div class="form-group">
            <label for="InputName">Your name:</label>
            <input
              type="username"
              class="form-control"
              v-model="name"
              id="InputName"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputSurname">Your surname:</label>
            <input
              type="username"
              class="form-control"
              v-model="surname"
              id="InputSurname"
              required
            />
          </div>
          <div class="form-group">
            <label for="firstName">Email:</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              id="firstName"
              placeholder=""
              value=""
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputPassword2">Password:</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              id="InputPassword2"
              placeholder=""
              required
            />
            <div style="text-align: center">
              <input
                style="allign-left"
                type="checkbox"
                @click="showPassword"
              />
              Show Password
            </div>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary"
              @click="signUp"
              data-toggle="modal"
              data-target="#"
            >
              Sign up
            </button>
            <transition name="slide-fade">
              <div
                v-if="ismodal"
                class="modal fade show"
                id="register"
                tabindex="-1"
                role="dialog"
                aria-labelledby="registerTitle"
                ref="register"
                style="display: block"
              >
                <div class="modal-dialog modal-dialog-centered" role="document" >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="registerLongTitle">
                        You registered new user succesfully
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="closeModal"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      User created
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click="backToLogin"
                        data-dismiss="modal"
                      >
                        back to users
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <div v-if="ismodal" class="modal-backdrop fade show"></div>
          </div>
          <div class="text-center">
            <br /><button
              type="button"
              class="btn btn-link"
              @click="backToLogin"
            >
              Go back to users list
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store/index.js";
import axios from "axios";
import https from "https";
//import $ from 'jquery';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export default {
  name: "RegisterScreen",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      ismodal: false,
      regModal: document.getElementById("register"),
    };
  },
  mounted() {
    this.regModal=document.getElementById("register");
  },
  methods: {
    backToLogin() {
      store.commit("changeRegister");
    },
    signUp() {
      axios
        .post("http://localhost:8082/api/addUser/", {
          httpsAgent: agent,
          email: this.email,
          name: this.name,
          surname: this.surname,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 200) {
            console.log("Registered.");
            this.ismodal=true;
          }
        })
        .catch(() => {
          console.log("Register failed.");
        });
    },
    showPassword() {
      if (document.getElementById("InputPassword2").type === "password") {
        document.getElementById("InputPassword2").type = "text";
      } else {
        document.getElementById("InputPassword2").type = "password";
      }
    },
    closeModal() {
      this.ismodal=false;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  color: #1f8a5a;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10em);
  opacity: 0;
}
</style>
