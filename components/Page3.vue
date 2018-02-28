<template>
  <div id="team" class="page page-3">
    <div class="page-content page-3-content">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data () {
    return { }
  },
}
</script>

<style lang="scss">
.page-3 {
  background-color: #FFFFFF;
}

.page-3-content {
  padding: 80px 0 60px 0;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  max-width: 900px;

  .companies {
    margin-bottom: 60px;
  }

  .header-bar {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;

    .bar {
      width: 32.5%;
      height: 1px;
      background-color: #D4D4D4;

      @media only screen and (max-width: 480px) {
        display: none;
      }
    }

    h1 {
      color: #666666;
      font-size: 1.125rem;
      text-transform: uppercase;
      letter-spacing: 4px;
      text-align: center;
      margin: auto 20px;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0;
    margin: 0;
  }

  .company-logo {
    width: 180px;
    height: 70px;
    margin: 10px 20px;
    filter: grayscale(100%);
    opacity: .35;
    text-align: center;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;

    &:hover {
      filter: none;
      opacity: 1.0;
    }
  }

  #facebook {
    background-image: url('./../assets/logo_fb.png');
  }

  #google {
    background-image: url('./../assets/logo_google.png');
  }

  #stripe {
    background-image: url('./../assets/logo_stripe.png');
  }

  #yc {
    background-image: url('./../assets/logo_yc.png');
  }

  #uber {
    background-image: url('./../assets/logo_uber.png');
  }

  #stanford {
    background-image: url('./../assets/logo_stanford.png');
  }

  #berkeley {
    background-image: url('./../assets/logo_berkeley.png');
  }

  #uiuc {
    background-image: url('./../assets/logo_uiuc.png');
  }

  #icon {
    background-image: url('./../assets/logo_icon.png');
  }

  #zrx {
    background-image: url('./../assets/logo_zrx.png');
  }

  #eth {
    background-image: url('./../assets/logo_ethereum.png');
  }

  #omg {
    background-image: url('./../assets/logo_omg.png');
  }

  p {
    color: rgb(161, 161, 161);
    font-size: .85rem;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
