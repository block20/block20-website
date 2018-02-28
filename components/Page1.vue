<template>
  <div class="page page-1">
    <nav-bar />
    <div class="page-content page-1-content">
      <cube />
      <div class="content-body">
        <h1>A Future with Blockchain</h1>
        <p>
          We are team of technologists that help build and fund the protocols of tomorrow.
        </p>
        <a class="typeform-share button" href="https://stitchroom.typeform.com/to/ZdSrxl" data-mode="popup" target="_blank">Get in Touch</a>
      </div>
    </div>
  </div>
</template>

<script>
import Cube from './Cube.vue';
import NavBar from './Nav.vue';


export default {
  name: 'Page1',
  components: { Cube, NavBar },
  data () {
    return { }
  },
}
</script>

<style lang="scss">
.page-1 {
  height: 90vh;
  color: white;
  background-color: #1D1D20;
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (max-width: 575px) {
    height: 440px !important;
  }
}

.page-1-content {
  height: 340px;
  margin-top: 120px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: flex-start;

  @media only screen and (max-width: 575px) {
    margin-top: 0;
  }

  .content-body {
    margin-left: -200px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    z-index: 1;
    flex-grow: 1;

    @media only screen and (max-width: 575px) {
      margin-left: auto;
    }
  }

  h1 {
    font-size: 4.0rem;
    line-height: 4.0rem;
    max-width: 480px;
    margin: 0 0 20px 0;

    @media only screen and (max-width: 575px) {
      font-size: 2.0rem;
      line-height: 2.0rem;
    }
  }

  p {
    font-size: 1.25rem;
    max-width: 480px;

    @media only screen and (max-width: 575px) {
      font-size: 1.0rem;
      line-height: 1.0rem;
    }
  }
}
</style>
