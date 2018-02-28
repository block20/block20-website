<!-- Template -->

<template>
  <div id="team" class="page team">
    <div class="page-content team-content">
      <div class="companies">
        <div class="header-bar">
          <div class="bar"></div>
          <h1>Who We Are</h1>
          <div class="bar"></div>
        </div>
        <p>
          We've worked and studied at some of the world’s best technology companies and engineering institutions.
        </p>
        <ul class="company-logos">
          <li class="company-logo" id="facebook"></li>
          <li class="company-logo" id="google"></li>
          <li class="company-logo" id="stripe"></li>
          <li class="company-logo" id="uber"></li>
          <li class="company-logo" id="yc"></li>
          <li class="company-logo" id="stanford"></li>
          <li class="company-logo" id="berkeley"></li>
          <li class="company-logo" id="uiuc"></li>
        </ul>
      </div>

      <div class="projects">
        <div class="header-bar">
          <div class="bar"></div>
          <h1>Projects</h1>
          <div class="bar"></div>
        </div>
        <p>
          We've been actively involved with these projects since their inception.
        </p>
        <ul class="company-logos">
          <li class="company-logo" id="eth"></li>
          <li class="company-logo" id="omg"></li>
          <li class="company-logo" id="zrx"></li>
          <li class="company-logo" id="icon"></li>
        </ul>
      </div>

      <div class="partners">
        <div class="header-bar">
          <div class="bar"></div>
          <h1>Partners</h1>
          <div class="bar"></div>
        </div>
        <p>
          We work closely with these partners to help projects succeed.
        </p>
        <ul class="company-logos">
          <li class="company-logo" id="tokendata"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<!-- Script -->

<script>
export default {
  name: 'Team',
  data () {
    return { }
  },
}
</script>

<!-- Style -->

<style lang="scss">
.team {
  background-color: #FFFFFF;
}

.team-content {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  max-width: 900px;
  padding: 100px 0;

  .companies, .projects {
    margin-bottom: 60px;
  }

  .header-bar {
    align-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-bottom: 20px;
    width: 100%;

    .bar {
      background-color: #D4D4D4;
      height: 1px;
      width: 32.5%;

      @media only screen and (max-width: 480px) {
        display: none;
      }
    }

    h1 {
      color: #333;
      font-size: 1.5rem;
      letter-spacing: 4px;
      margin: auto 20px;
      text-align: center;
      text-transform: uppercase;
    }
  }

  p {
    color: #666;
    margin-bottom: 20px;
    text-align: center;
  }

  ul {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .company-logo {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    filter: grayscale(100%);
    height: 70px;
    margin: 10px 20px;
    opacity: .35;
    text-align: center;
    width: 180px;

    &:hover {
      filter: none;
      opacity: 1.0;
    }
  }

  #facebook {
    background-image: url('~/assets/img/logos/facebook.png');
  }

  #google {
    background-image: url('~/assets/img/logos/google.png');
  }

  #stripe {
    background-image: url('~/assets/img/logos/stripe.png');
  }

  #yc {
    background-image: url('~/assets/img/logos/yc.png');
  }

  #uber {
    background-image: url('~/assets/img/logos/uber.png');
  }

  #stanford {
    background-image: url('~/assets/img/logos/stanford.png');
  }

  #berkeley {
    background-image: url('~/assets/img/logos/berkeley.png');
  }

  #uiuc {
    background-image: url('~/assets/img/logos/uiuc.png');
  }

  #icon {
    background-image: url('~/assets/img/logos/icon.png');
  }

  #zrx {
    background-image: url('~/assets/img/logos/zrx.png');
  }

  #eth {
    background-image: url('~/assets/img/logos/ethereum.png');
  }

  #omg {
    background-image: url('~/assets/img/logos/omg.png');
  }

  #tokendata {
    background-image: url('~/assets/img/logos/tokendata.png');
  }
}
</style>
