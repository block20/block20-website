<!-- Template -->

<template>
  <div class="page hero">
    <navigation />
    <div class="page-content hero-content">
      <cube />
      <div class="content-body">
        <h1>A Future with Blockchain</h1>
        <p>
          We are a team of technologists that help build and fund the protocols of tomorrow.
        </p>
        <a class="button" href="mailto:block20group@gmail.com" target="_blank">
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</template>

<!-- Script -->

<script>
import Cube from '~/components/Cube.vue';
import Navigation from '~/components/Navigation.vue';

export default {
  name: 'Hero',
  components: { Cube, Navigation },
  data () {
    return { }
  },
}
</script>

<!-- Style -->

<style lang="scss">
.hero {
  background-color: #1D1D20;
  background-repeat: no-repeat;
  background-size: contain;
  color: white;
  height: 85vh;

  @media only screen and (max-width: 575px) {
    height: 440px !important;
  }
}

.hero-content {
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  height: 340px;
  margin-top: 150px;

  @media only screen and (max-width: 575px) {
    margin-top: 0;
  }

  .content-body {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-left: 270px;
    z-index: 1;

    @media only screen and (max-width: 575px) {
      margin-left: auto;
    }
  }

  h1 {
    font-size: 4.0rem;
    line-height: 4.0rem;
    margin: 0 0 20px 0;
    max-width: 480px;

    @media only screen and (max-width: 575px) {
      font-size: 2.0rem;
      line-height: 2.0rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 15px;
    max-width: 480px;

    @media only screen and (max-width: 575px) {
      font-size: 1.0rem;
      line-height: 1.5rem;
    }
  }
}
</style>
