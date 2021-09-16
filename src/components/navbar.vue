<template>
  <header class="header-container">
      <div style="display:flex; align-items:center">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.2" cx="17.3767" cy="17.3767" r="17.3767" fill="#046AF3"/>
          <circle cx="17.3767" cy="17.3767" r="10" fill="white" stroke="#046AF3" stroke-width="4.99812"/>
        </svg>
          <router-link to="/" class="navbar-logo">WeeCash</router-link>
      </div>
      <div>
        <ul class="header-navbar">
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/login">Sign In</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <button type="button" @click="logout" class="logout-button">Logout</button>
            </li>
        </ul>
      </div>
  </header>
</template>

<script>
export default {
    computed: {
        isLoggedIn () {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style>
    .header-container {
        height: 70px;
        padding: 10px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-navbar {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 20px;
    }
    .header-navbar .nav-item {
        list-style: none;
    }
    .navbar-logo {
        font-size: 27px;
        font-weight: 700;
        color: #07074D;
        line-height: 1.2;
        text-decoration: none;
        margin-left: 4px;
    }
    .nav-link {
        text-decoration: none;
        color: #07074D;
        font-size: 18px;
        font-weight: 500;
    }
    .logout-button {
        border: none;
        background-color: #07074D;
        padding: 10px 25px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        cursor: pointer;
    }
</style>