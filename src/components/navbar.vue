<template>
  <header class="header-container">
      <div>
          <router-link to="/" class="navbar-logo">Fintellia</router-link>
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
        font-size: 32px;
        font-weight: 600;
        color: #07074D;
        line-height: 1.2;
        text-decoration: none;
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