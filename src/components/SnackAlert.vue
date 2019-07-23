<template>
  <div id="snackbar">{{message}}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>

 <style scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
}

.center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

button {
  border: 1px solid #fff;
  width: 200px;
  padding: 10px 15px;
  cursor: pointer;
  background: transparent;
  font-family: "space mono", monospace;
  color: inherit;
  margin: 20px;
}
button:hover {
  border: 1px solid rgba(0, 0, 80, 0.952);
}
button:active {
  box-shadow: 0px 3px 5px black;
}

#snackbar {
  position: absolute;
  text-align: center;
  padding: 10px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  background: #fff;
  border: 2px dotted rgb(230, 158, 51);
  color: #000;
  visibility: hidden;
}

#snackbar.show {
  visibility: visible;
  animation: fade-in 0.3s, fade-out 0.3s 2.7s;
}

@keyframes fade-in {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>