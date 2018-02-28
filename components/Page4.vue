<template>
  <div id="contact" class="page page-4">
    <div class="page-content page-4-content">
      <h1>Have a Project?</h1>
      <a class="typeform-share button" href="https://stitchroom.typeform.com/to/ZdSrxl" data-mode="popup" target="_blank">Get in Touch</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page4',
  data () {
    return { }
  },
}
</script>

<style lang="scss">
.page-4 {
  height: 480px !important;
  background-color: #1D1D20;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  color: white;

  @media only screen and (max-width: 575px) {
    height: 360px !important;
  }
}

.page-4-content {
  max-width: 480px;
  margin-bottom: 60px;
  text-align: center;

  h1 {
    font-size: 3.6rem;
    line-height: 4.0rem;
    margin-bottom: 100px;

    @media only screen and (max-width: 575px) {
      margin-bottom: 60px;
      font-size: 2.0rem;
      line-height: 2.0rem;
    }
  }

  a:hover {
    text-decoration: none;
  }
}
</style>
