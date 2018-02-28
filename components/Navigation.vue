<!-- Template -->

<template>
  <div class="top-nav">
    <div class="logo"></div>
    <no-ssr>
      <ul class="nav-items">
        <a href="#" v-scroll-to="'#team'">
          <li class="nav-item">Team</li>
        </a>
        <a href="#" v-scroll-to="'#contact'">
          <li class="nav-item">Contact</li>
        </a>
      </ul>
    </no-ssr>
  </div>
</template>

<!-- Script -->

<script>
export default {
  name: 'Navigation',
  data () {
    return { }
  },
}
</script>

<!-- Style -->

<style lang="scss">
.top-nav {
  align-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px 0 0;
  width: 60%;

  @media only screen and (max-width: 575px) {
    width: 80%;
  }
}

.logo {
  margin: auto 5px;
  width: 200px;
  height: 50px;
  background: url('~/assets/img/logo-white.png');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: 575px) {
    margin: 0;
  }
}

.nav-items {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
}

.nav-item {
  border-bottom: 2px solid #1D1D20;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 10px 20px 0;

  &:hover {
    border-bottom: 2px solid #FFFFFF;
  }
}
</style>
