<template>
  <div class="home">
    <navbar/>
    <section class="app-container landing-wrapper">
      <div class="landing__column--one">
        <h1 class="landing__text">Banking has never been so rewarding.</h1>
        <p class="landing__subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quasi magnam? Voluptatum soluta dolorum aliquam..</p>
        <router-link to="/login">
          <button type="button" class="landing--button">Get started</button>
        </router-link>
      </div>
      <div class="landing__column--two">
        <img src="@/assets/images/Phone.svg" alt="phone">
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data: () => ({
    title: 'Hello Vue!'
  })
}
</script>

<style scoped>
.landing-wrapper {
  min-height: 100vh;
  background-color: #F2F5FF;
}
.landing__text {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #07074D;
  width: 100%;
}
.landing__subtext {
  font-size: 19px;
  line-height: 25px;
  width: 100%;
  color: #58678d;
  width: 80%;
}
.landing--button {
  margin-top: 25px;
  background-color: #07074D;
  border-radius: 5px;
  width: 100%;
  color: #fff;
  max-width: 150px;
  height: 48px;
  font-size: 16px;
  line-height: 19px;
  border: 0;
  cursor: pointer;
}
@media ( min-width : 600px ){
	.landing-wrapper {
    width: 100%;
    margin: 0 auto;
    display: -webkit-flex;
    display: flex;
	}
  .landing__column--one {
    margin-top: 100px;
  }
  .landing__column--one,
  .landing__column--two {
    -webkit-flex: 1;
    flex: 1;
    background: none;
  }
}
</style>
