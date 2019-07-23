<template>
  <section class="section-test">
    <h1>Welcome to crenet test Day!</h1>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore qui tempora cumque in? Nobis veniam officia illo iusto atque!</span>

    <div class="btn-stack">
      <button class="btn btn--primary" @click="showSnackbar('Hi from 1')">Action 1</button>
      <button class="btn btn--secondary" @click="showSnackbar('Hi from 2')">Action 2</button>
      <button class="btn btn--tertiary" @click="showSnackbar('Hi from 3')">Action 3</button>
    </div>
    <Alert :message="alertMessage" />
  </section>
</template>

<script>
import Alert from '@/components/SnackAlert';
export default {
  data() {
    return {
      alertMessage: ''
    }
  },
  components: {
    Alert
  },
  methods: {
    showSnackbar(params) {
      const snackBar = document.getElementById('snackbar')
      this.alertMessage = params
      snackBar.classList.toggle('show')
      setTimeout(() => {
        snackBar.classList.toggle('show')
      }, 3000)
    }
  }

}
</script>



<style scoped>
.section-test {
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
}
.section-test h1 {
  font-size: 40px;
  text-transform: uppercase;
  align-items: center;
}

.btn-stack {
  display: flex;
  flex-direction: row;
  width: 60%;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
}
</style>

