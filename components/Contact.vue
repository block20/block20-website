<!-- Template -->

<template>
  <div id="contact" class="page contact">
    <div class="page-content contact-content">
      <h1>Have a Project?</h1>

      <a class="button" href="mailto:block20group@gmail.com" target="_blank">
        Get in Touch
      </a>
    </div>
  </div>
</template>

<!-- Script -->

<script>
export default {
  name: 'Contact',
  data () {
    return { }
  },
}
</script>

<!-- Style -->

<style lang="scss">
.contact {
  align-content: center;
  align-items: center;
  background-color: #1D1D20;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 480px !important;
  justify-content: center;

  @media only screen and (max-width: 575px) {
    height: 300px !important;
  }
}

.contact-content {
  margin-bottom: 60px;
  max-width: 480px;
  text-align: center;

  h1 {
    font-size: 3.6rem;
    line-height: 4.0rem;
    margin-bottom: 60px;

    @media only screen and (max-width: 575px) {
      font-size: 2.0rem;
      line-height: 2.0rem;
      margin-bottom: 60px;
    }
  }

  a:hover {
    text-decoration: none;
  }
}
</style>
