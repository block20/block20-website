<template>
  <div class="cube-container">
    <div class="cube">
      <figure class="front"></figure>
      <figure class="back"></figure>
      <figure class="right"></figure>
      <figure class="left"></figure>
      <figure class="top"></figure>
      <figure class="bottom"></figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cube',
  data () {
    return { }
  },
}
</script>

<style lang="scss" scoped>
// =======CUBE CONTAINER ======= //
.cube-container {
  margin-left: 100px;
  height: 300px;
  width: 300px;
  perspective: 400px;// distance between the scene and the viewer
  perspective-origin: 50% 50%;
  transition: .3s all ease;

  @media only screen and (max-width: 575px) {
    display: none;
  }
}

// =======BEGIN CUBE ======= //

.cube {
  animation: spin 10s infinite linear;
  height: 100%;
  position: absolute;
  transition: .5s all ease-in-out;
  // preserve 3fd effect of child elements
  // default value is 'flat'
  // preserve effects of child elements
  transform-style: preserve-3d;
  // panels global styles
  transform: rotateX(-20deg) rotateY(28deg);
  // tells browser not to render the back of the element
  // Accepts visible | hidden
  backface-visibility: visible;
  width: 100%;

  figure {
    box-sizing: border-box;
    margin: 0;
    display: block;
    height: 300px;
    position: absolute;
    width: 300px;
    font-size: 2em;
    line-height: 6em;
    text-align: center;
  }
}

// =======BEGIN CUBE PANELS======= //

.cube .front {
  transform: translateZ(150px);
  background: rgba(0.2,0.2,0.2,.5);
}
.cube .back {
  transform: rotateY(180deg) rotateX(0deg) translateZ(150px);
  background: rgba(0.2,0.2,0.2,.6);
}
.cube .left {
  transform: rotateY(-90deg) translateZ(150px);
  background: rgba(1,1,1,.5);
}
.cube .right {
  transform: rotateY(90deg) translateZ(150px);
  background: rgba(1,1,1,.4);
}
.cube .top {
  transform: rotateX(90deg) translateZ(150px);
  background: rgba(255,255,255,.2);
}
.cube .bottom {
  transform: rotateX(-90deg) rotateZ(-180deg) translateZ(150px);
  background: rgba(255,255,255,.2);
  opacity: .55;
}

@keyframes spin {
  from { transform: rotateX(0) rotateY(0); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}
</style>
