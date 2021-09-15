<template>
  <section>
      <navbar/>
      <div class="signup-wrapper">
        <div class="signup__container">
        <h1 class="signup__heading">Welcome to Fintellia</h1>
        <p class="signup__text">Create your account</p>
        <form class="signup__form" @submit.prevent="register">
          <div class="input__container">
            <label for="email" class="input__label">Username</label>
            <input
                id="username"
                type="text"
                name="username"
                v-model="form.username"
                placeholder="Enter your Username"
                class="input__field"
            />
            </div>
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
                name="password"
                v-model="form.password"
                placeholder="Enter your password"
                class="input__field"
            />
            </div>
            <div class="form__footer">
                <button type="submit" :disabled="loading === true" class="input__button">
                  <div v-if="loading">
                    <div id="loading"></div>
                </div>  
              <div v-else>Sign up</div>
              </button>
            </div>
        </form>
        <p class="signup__text">
            Already have an account?
            <router-link class="signup__text--blue" to="/signup">Sign In</router-link>
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
        username: '',
        email: '',
        password: '',
        returnSecureToken: true
      },
      loading: false
    }),
    methods: {
      async register() {
        try {
          this.loading = true
          await this.$store.commit('register', this.form.username)
          await this.$store.dispatch('register', this.form)
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
.signup-wrapper  {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
    background-color: #F2F5FF;
}
.signup__container {
  width: 100%;
}
.signup__heading {
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  font-size: 30px;
  width: 100%;
  color: #07074D;
}
.signup__text {
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  text-align: center;
  color: #58678d;
}
.signup__text--inline {
  display: inline-block;
  text-align: left;
}
.signup__text--blue {
  color: #07074D;
}
.signup__form {
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
  border: 1px solid #5d5d5f;
}
.input__field::placeholder {
  color: rgba(88, 103, 141, 0.5);
  font-size: 15px;
  line-height: 20px;
}
.form__footer {
  display: flex;
  justify-content: flex-center;
  align-items: center;
}
.input__button {
  background-color: #07074D;
  border-radius: 5px;
  width: 100%;
  color: #fff;
  max-width: 370px;
  height: 48px;
  font-size: 16px;
  line-height: 19px;
  border: 0;
  cursor: pointer;
}

</style>