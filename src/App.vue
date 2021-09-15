<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;700&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
}
.app-container {
  padding: 20px 50px;
}
/* spinner */
    #loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
</style>
