<template>
  <div class="container">
    <div class="login-header">
      <h1>Login in to start using the testing platform.</h1>
    </div>
    <div class="content">
      <form class="login" @submit.prevent="login">
        <h4 class="form-header">Login in to become part of the testing platform.</h4>

        <div class="form-group">
          <label for="email" class="pt20">
            <span>Email</span>
            <input type="email" v-model="email" name="email" id="email" />
          </label>
        </div>
        <div class="form-group">
          <label for="password" class="pt20">
            <span>Password</span>
            <input type="password" v-model="password" name="password" id="password" />
          </label>
        </div>
        <div class="form-group pt20">
          <button class="btn btn-black" type="submit">login</button>
        </div>
      </form>
      <div class="login-avi"></div>
    </div>

    <Alert :message="alertMessage" />
  </div>
</template>


<script>
import Alert from '@/components/SnackAlert';

export default {
  components: {
    Alert
  },
  data() {
    return {
      email: "",
      password: "",
      alertMessage: ""
    }
  },

  methods: {
    validateFields() {
      if (!this.email || !this.password) {
        this.alertMessage = "Check the fields and try again"
        this.showSnackbar(this.alertMessage)
        return false
      }
      return true
    },
    showSnackbar(params) {
      const snackBar = document.getElementById('snackbar')
      this.alertMessage = params
      snackBar.classList.toggle('show')
      setTimeout(() => {
        snackBar.classList.toggle('show')
      }, 3000)
    },
    login() {
      let validate = this.validateFields()
      if (validate == false) return

      localStorage.setItem('email', this.email)
      localStorage.getItem('email')
      location.replace('/devs')
    }
  }
}
</script>



<style scoped>
.content {
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  background-color: white;
  padding: 20px;
}
.login-header {
  display: block;
  width: 100%;
}
.form-header {
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: -20px;
}

.login {
  color: black;
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 40%;
}

.login-avi {
  display: flex;
  background-color: wheat;
  width: 60%;
}
</style>
