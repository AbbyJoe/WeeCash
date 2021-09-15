<template>
  <section>
      <navbar/>
      <div class="login-wrapper">
        <div class="login__container">
        <h1 class="login__heading">Welcome Back</h1>
        <p class="login__text">Enter your credentials to access your account</p>
        <form class="login__form" @submit.prevent="login">
            <div class="input__container">
            <label for="email" class="input__label">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                v-model="form.email"
                placeholder="Enter your email"
                class="input__field"
            />
            </div>
            <div class="input__container input__container--relative">
            <label for="password" class="input__label">Password</label>
            <input
                id="password"
                type="password"
                v-model="form.password"
                name="password"
                placeholder="Enter your password"
                class="input__field"
            />
            </div>
            <div class="form__footer">
            <router-link
                to="/"
                class="login__text login__text--inline"
                >Forgot password?</router-link
            >
            <button type="submit" :disabled="loading === true" class="input__button">
              <div v-if="loading">
                    <div id="loading"></div>
                </div>  
              <div v-else>Sign In</div>
            </button>
            </div>
        </form>
        <p class="login__text">
            Don’t have an account yet?
            <router-link class="login__text--blue" to="/signup">Sign up</router-link>
        </p>
        </div>
      </div>   
  </section>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default {
    components: {
        Navbar
    },
    data:() => ({
      form: {
        email: '',
        password: '',
        returnSecureToken: true
      },
      loading: false
    }),
    methods: {
      async login() {
        try {
          this.loading = true
          await this.$store.dispatch('login', this.form)
          this.loading = false
        } catch (e) {
          this.loading = false
          console.log(e)
        }
        
      }
    }
}
</script>

<style>
.login-wrapper  {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
    background-color: #F2F5FF;
}
.login__container {
  width: 100%;
}
.login__heading {
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  font-size: 26px;
  width: 100%;
  color: #07074D;
}
.login__text {
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  text-align: center;
  color: #58678d;
}
.login__text--inline {
  display: inline-block;
  text-align: left;
}
.login__text--blue {
  color: #07074D;
}
.login__form {
  background-color: #ffffff;
  box-shadow: 0px 1.0566px 10.566px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 31.65px;
  margin: 24px auto;
  max-width: 434px;
}
.input__container {
  margin-bottom: 36px;
  width: 100%;
}
.input__container--relative {
  position: relative;
}
.input__label {
  font-size: 13px;
  width: 100%;
  display: block;
  margin-bottom: 10px;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #58678d;
}
.input__field {
  background-color: #ffffff;
  border: 1px solid #e4e9f2;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  padding-left: 15px;
  box-sizing: border-box;
  border-radius: 4px;
}
.input__field:focus {
    outline: #07074D;
}
.input__field:active {
  border: 1px solid #07074D;
}
.input__field::placeholder {
  color: rgba(88, 103, 141, 0.5);
  font-size: 15px;
  line-height: 20px;
}
.form__footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.input__button {
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

</style>