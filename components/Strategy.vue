<!-- Template -->

<template>
  <div id="strategy" class="page strategy">
    <div class="page-content strategy-content">
      <h2>Smart Investing</h2>
      <h1>Scoring Rubric</h1>
      <p>
        Backed by years of investment research experience, our team of engineers, financial analysts, and crypto currency experts, have developed a unique grading model for ensuring each investment is done responsibly. We participate actively in the technical development of protocols by running nodes, reviewing code, and making open source contributions.
      </p>
    </div>
  </div>
</template>

<!-- Script -->

<script>
export default {
  name: 'Strategy',
  data () {
    return { }
  },
}
</script>

<!-- Style -->

<style lang="scss">
.strategy {
  align-content: stretch;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: #302F36;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.9) 100%), url('~/assets/img/bg-hero.jpg');
  color: white;
  height: 840px !important;

  @media only screen and (max-width: 575px) {
    height: 520px !important;
  }
}

.strategy-content {
  width: 60%;

  @media only screen and (max-width: 575px) {
    width: 90%;
  }

  h1 {
    font-size: 4.0rem;
    line-height: 4.0rem;
    margin: 10px 0 20px -5px;
    max-width: 480px;
    text-transform: uppercase;

    @media only screen and (max-width: 575px) {
      font-size: 2.0rem;
      line-height: 2.0rem;
      margin-left: 0px;
    }
  }

  h2 {
    color: rgb(110, 110, 110);
    letter-spacing: .25rem;
    margin: 0;
    text-transform: uppercase;

    @media only screen and (max-width: 575px) {
      font-size: 1.0rem;
    }
  }

  p {
    color: #A09DB1;
    font-size: 1.0rem;
    line-height: 2.0rem;
    max-width: 480px;

    @media only screen and (max-width: 575px) {
      line-height: 1.5rem;
    }
  }
}
</style>
