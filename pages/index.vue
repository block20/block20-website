<template>
  <div>
    <page-1 />
    <page-2 />
    <page-3 />
    <page-4 />
  </div>
</template>

<script>
import Page1 from './../components/Page1.vue';
import Page2 from './../components/Page2.vue';
import Page3 from './../components/Page3.vue';
import Page4 from './../components/Page4.vue';


export default {
  name: 'app',
  components: { Page1, Page2, Page3, Page4 },
  data () {
    return { }
  },
}
</script>

<style lang="scss">
button, .button {
  border-radius: 40px;
  padding: 18px 60px 22px 60px;
  margin: 20px 0;
  background-color: #524C94;
  color: white;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-family: 'Exo 2', sans-serif;
  cursor: pointer;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-decoration: none;
  transition: all .2s ease-in-out;

  @media only screen and (max-width: 480px) {
    padding: 18px 25px 22px 25px;
    font-size: 1.0em;
  }

  &:hover {
    background-color: lighten(#524C94, 10%);
  }
}

.page-content {
  padding: 20px;
  margin: 0 auto;
  width: 80%;

  @media only screen and (max-width: 575px) {
    width: 90%;
  }
}
</style>
