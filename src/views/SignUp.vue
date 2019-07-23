<template>
  <div class="container">
    <div class="signup-header">
      <h1>Sign up to become part of the testing platform.</h1>
    </div>
    <div class="content">
      <form action class="signup">
        <h4 class="form-header">Sign up to become part of the testing platform.</h4>

        <div class="form-group">
          <label for="first-name">
            <span>Firstname</span>
            <input type="text" name="firstname" v-model="firstname" id="firstname" />
          </label>
        </div>
        <div class="form-group">
          <label for="lastname" class="pt20">
            <span>Lastname</span>
            <input type="text" name="lastname" v-model="lastname" id="lastname" />
          </label>
        </div>
        <div class="form-group">
          <label for="email" class="pt20">
            <span>Email</span>
            <input type="email" name="email" v-model="email" id="email" />
          </label>
        </div>
        <div class="form-group">
          <label for="phone-number" class="pt20">
            <span>Phone number</span>
            <input type="tel" name="phone-number" v-model="phone" id="phone-number" />
          </label>
        </div>
        <div class="form-group pt20">
          <button class="btn btn-black" @click.prevent="signup">sign up</button>
        </div>
      </form>
      <div class="signup-avi"></div>
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
      firstname: '',
      lastname: "",
      email: "",
      phone: "",
      alertMessage: ""
    }
  },

  methods: {
    validateFields() {
      if (!this.firstname || !this.lastname || !this.email || !this.phone) {
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
    signup() {
      let validate = this.validateFields()
      if (validate == false) return
      this.$router.push('/login')
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
.signup-header {
  display: block;
  width: 100%;
}
.form-header {
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: -20px;
}

.signup {
  color: black;
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 40%;
}

.signup-avi {
  display: flex;
  background-color: wheat;
  width: 60%;
}
</style>
