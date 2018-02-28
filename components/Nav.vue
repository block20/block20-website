<template>
  <div class="top-nav">
    <div class="logo"></div>
    <ul class="nav-items">
      <a href="#" v-scroll-to="'#strategy'"><li class="nav-item">Strategy</li></a>
      <a href="#" v-scroll-to="'#team'"><li class="nav-item">Team</li></a>
      <a href="#" v-scroll-to="'#contact'"><li class="nav-item">Contact</li></a>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Nav',
  data () {
    return { }
  },
}
</script>

<style lang="scss">
.top-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  margin: 0 auto;
  padding: 20px;
  width: 80%;

  @media only screen and (max-width: 575px) {
    width: 90%;
  }
}

.logo {
  margin: auto 5px;
  width: 140px;
  height: 30px;
  background: url('./../assets/logo_blocktwenty.png');
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: 575px) {
    margin: 0;
  }
}

.nav-items {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
}

.nav-item {
  margin: 0 20px;
  cursor: pointer;
  border-bottom: 2px solid #1D1D20;

  &:hover {
    border-bottom: 2px solid #FFFFFF;
  }
}
</style>
