<!-- Template -->

<template>
  <div>
    <hero />
    <team />
    <contact />
  </div>
</template>

<!-- Script -->

<script>
import Hero from '~/components/Hero.vue';
import Team from '~/components/Team.vue';
import Contact from '~/components/Contact.vue';

export default {
  name: 'App',
  components: { Hero, Team, Contact },
  data () {
    return { }
  },
}
</script>

<!-- Style -->

<style lang="scss">
.page-content {
  margin: 0 auto;
  padding: 20px;
  width: 80%;

  @media only screen and (max-width: 575px) {
    width: 90%;
  }
}

button, .button {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #524C94;
  border-radius: 40px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Exo 2', sans-serif;
  font-size: 1.6rem;
  margin: 20px 0;
  outline: none;
  padding: 18px 60px 22px 60px;
  text-decoration: none;
  transition: all .2s ease-in-out;

  @media only screen and (max-width: 480px) {
    font-size: 1.0em;
    padding: 18px 25px 22px 25px;
  }

  &:hover {
    background-color: lighten(#524C94, 10%);
  }
}
</style>
