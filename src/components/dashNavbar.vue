<template>
  <div class="navbar">
    <div class="search-bar">
      <form action="#" class="input__container" autocomplete="off">
        <img src="@/assets/images/search-icon.svg" alt="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          class="input__search"
          placeholder="Search..."
        />
      </form>
    </div>
    <ul class="icons">
      <li>
        <router-link to="/">
          <img src="@/assets/images/notification-icon.svg" alt="notification-icon">
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/images/help-icon.svg" alt="notification-icon">
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <img src="@/assets/images/account-icon.svg" alt="notification-icon">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>
<style scoped>
.navbar {
	padding: 20px 40px 0px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
}
 .navbar .search-bar form {
	display: flex;
	gap: 8px;
	align-items: center;
}
 .input__search {
	background-color: #ffffff;
    border: 1px solid #e4e9f2;
    box-sizing: border-box;
    width: 330px;
    height: 40px;
    padding-left: 15px;
    border-radius: 4px;
}
.input__search::placeholder {
  color: rgba(88, 103, 141, 0.5);
  font-size: 15px;
  line-height: 20px;
}
.input__search:focus {
    outline: #07074D;
}
 .navbar .icons {
	list-style: none;
	display: flex;
	align-items: center;
	gap: 16px;
    margin-bottom: 30px;
}
 .navbar .icons li img {
	height: 16px;
	width: 16px;
}
 
</style>