<template>
  <nav class="navigation">
    <span class="navigation__brand">
      <router-link to="/">Crenet Test Day</router-link>
    </span>
    <ul class="navigation__links">
      <li v-if="checkAuth">
        <router-link to="/devs">Dev</router-link>
      </li>
      <li v-if="checkAuth">
        <router-link to="/add-dev">Add Dev</router-link>
      </li>
      <li v-if="!checkAuth">
        <router-link to="/aboutus">About us</router-link>
      </li>
      <li v-if="!checkAuth">
        <router-link to="/login">login</router-link>
      </li>
      <li v-if="!checkAuth">
        <router-link to="/signup">Sign up</router-link>
      </li>
      <li v-if="checkAuth">
        <a href @click.prevent="logout">logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {

    checkAuth() {
      if (localStorage.getItem('email')) {
        return true
      }
      return false
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      location.replace('/')
    }
  }
}
</script>



<style scoped>
.navigation {
  display: flex;
  width: 100%;
  background-color: bisque;
  height: 50px;
  color: black;
  align-items: center;
  padding: 0 80px;
  justify-content: space-between;
}
.navigation__brand a {
  color: black;
  text-transform: uppercase;
  font-weight: 600;
}
.navigation__links {
  width: 30%;
  justify-content: space-between;
  display: flex;
}
.navigation__links a {
  font-weight: 400;
  font-size: 15px;
}

.navigation__links li {
  list-style: none;
}

.navigation__links li a {
  text-decoration: none;
  color: black;
}
</style>
