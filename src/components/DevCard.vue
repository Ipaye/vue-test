<template>
  <div class="dev-card">
    <span class="dev-no">#{{$attrs.index + 1}}</span>

    <h4 class="dev-desc pb10 dev-name" :style="`border-color: ${developer['eye-color']}`">
      <span>Name :</span>
      <span class>{{developer.name}}</span>
    </h4>
    <div class="dev-desc">
      <span>Nick :</span>
      <span>{{developer.nick}}</span>
    </div>
    <div class="dev-desc">
      <span>Role :</span>
      <span>{{developer.role}}</span>
    </div>
    <p class="eye-color">#{{developer['eye-color']}} [Eyes]</p>
  </div>
</template>

<script>
export default {
  props: {
    developer: {
      type: Object,
      required: true
    },

  }
}
</script>


<style scoped>
.dev-card {
  position: relative;
  border: 2px dotted whitesmoke;
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  min-height: 200px;
}
.dev-card .eye-color {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.dev-desc {
  display: flex;
  justify-content: space-between;
}
.dev-no {
  position: absolute;
  bottom: 0;
  color: rgba(113, 113, 113, 0.34);
  font-weight: 600;
  font-size: 40px;
}
.dev-name {
  border: 2px solid blanchedalmond;
  padding: 5px;
  padding-bottom: 5px;
}
</style>

