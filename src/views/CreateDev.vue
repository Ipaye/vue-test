<template>
  <div class="container">
    <div class="dev-header">
      <h1>Add a new developer.</h1>
    </div>
    <div class="content">
      <form action class="dev">
        <h4 class="form-header">Add a new developer.</h4>

        <div class="form-group">
          <label for="fullname">
            <span>Full Name</span>
            <input type="text" v-model="name" name="fullname" id="fullname" />
          </label>
        </div>
        <div class="form-group">
          <label for="nickname" class="pt20">
            <span>Nick Name</span>
            <input type="text" v-model="nick" name="nickname" id="nickname" />
          </label>
        </div>
        <div class="form-group">
          <label for="role" class="pt20">
            <span>Role</span>
            <input type="text" v-model="role" name="role" id="role" />
          </label>
        </div>
        <div class="form-group">
          <label for="eyecolor" class="pt20">
            <span>Eye Color</span>
            <input type="color" v-model="color" name="eyecolor" id="eyecolor" />
          </label>
        </div>
        <div class="form-group pt20">
          <button class="btn btn-black" @click.prevent="createDev">Add dev</button>
        </div>
      </form>
      <div class="dev-avi"></div>
      <Alert :message="alertMessage" />
    </div>
  </div>
</template>

<script>
import Alert from '@/components/SnackAlert';
import { developers } from '../assets/data.js';
import { setTimeout } from 'timers';


export default {
  components: {
    Alert
  },
  data() {
    return {
      name: '',
      nick: "",
      role: "",
      color: "",
      alertMessage: ""
    }
  },

  methods: {
    validateFields() {
      if (!this.name || !this.nick || !this.role || !this.color) {
        this.alertMessage = "Check the fields and try again"
        this.showSnackbar(this.alertMessage)
        return
      }
    },
    showSnackbar(params) {
      const snackBar = document.getElementById('snackbar')
      this.alertMessage = params
      snackBar.classList.toggle('show')
      setTimeout(() => {
        snackBar.classList.toggle('show')
      }, 3000)
    },
    createDev() {
      let validate = this.validateFields()
      if (validate == false) return
      let data = {
        name: this.name,
        role: this.role,
        nick: this.nick,
        'eye-color': this.color
      }
      developers.push(data)
      console.log('[developer]', developers);

      let self = this
      setTimeout(() => {
        this.$router.push('/devs')
      }, 500);
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
.dev-header {
  display: block;
  width: 100%;
}
.form-header {
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: -20px;
}

.dev {
  color: black;
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 40%;
}

.dev-avi {
  display: flex;
  background-color: wheat;
  width: 60%;
}
</style>
