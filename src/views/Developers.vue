<template>
  <section class="container">
    <div class="row">
      <h1>Developer Lisitng</h1>
      <div class="dev-listing">
        <Developers v-for="(dev, i) in developers" :developer="dev" :index="i" :key="i"></Developers>
      </div>
    </div>
  </section>
</template>

<script>
import { developers } from '../assets/data.js';

import Developers from '@/components/DevCard';
export default {
  data() {
    return {
      developers: []
    }
  },
  components: {
    Developers
  },
  mounted() {
    this.developers = developers;
    console.log('[data]', developers);
  }
}

</script>

<style scoped>
.row {
  display: grid;
}
.dev-listing {
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 22px;
  grid-row-gap: 25px;
}
</style>
