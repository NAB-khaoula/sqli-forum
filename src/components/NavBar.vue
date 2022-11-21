<template>
  <header
    id="header"
    class="header"
  >
    <router-link
      class="logo"
      :to="{ name: 'HomePage' }"
    >
      <img
        src="../assets/svg/forum-logo.svg"
        alt=""
      >
    </router-link>
    <div class="btn-hamburger">
      <div class="top bar" />
      <div class="middle bar" />
      <div class="bottom bar" />
    </div>
    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <a href="#">
            <img
              src="../assets/images/professionnelPhoto.jpg"
              alt="avatar"
              class="avatar-small"
            >
            <span>
              Khaoula NABOUSSI
            </span>
          </a>
          <div id="user-dropdown">
            <div class="triangle-drop" />
            <ul class="dropdown-menu">
              <li class="dropdown-meni-item">
                <a href="#">View Profile</a>
              </li>
              <li class="dropdown-meni-item">
                <a href="#">Log OUT</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
