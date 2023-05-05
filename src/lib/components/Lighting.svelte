<script lang="ts">
    let dimLight = true;
    let offLight = true;

    export function turnOnLight() {
        offLight = false;

        setInterval(() => {
            // run for 1 in 10 chance
            if (Math.random() < (dimLight ? 0.5 : 0.01)) {
                dimLight = true;
            } else {
                dimLight = false;
            }
        }, 10);
    }
</script>

<style>
    .lighting {
        background-color: rgba(0,0,0,0.5);
        background-size: cover;
        transition-duration: 0.025s;
    }

    .lighting.dim {
        background-image: radial-gradient(
            circle at 30% 30%, 
            rgba(255,255,255,0.5) 0%, 
            rgba(255,255,255,0.2) 30%, 
            rgba(255,255,255,0) 90%, 
            rgba(255,255,255,0) 100%
        ); 
        opacity: 0.9;
    }

    .lighting.light {
        background-image: radial-gradient(
            circle at 30% 30%, 
            rgba(255,255,255,0.4) 0%, 
            rgba(255,255,255,0.2) 40%, 
            rgba(255,255,255,0.0) 50%, 
            rgba(255,255,255,0.0) 100%
        );
        opacity: 0.5;
    }

    .lighting.off {
        background-color: rgba(0,0,0,0.94);
        background-image: radial-gradient(
            circle at 30% 30%, 
            rgba(0,0,0,0.8) 0%, 
            rgba(0,0,0,0.4) 40%, 
            rgba(0,0,0,0.2) 50%, 
            rgba(0,0,0,0.2) 100%
        );
        opacity: 0.99;
    }

    svg {
        opacity: 0.5;
    }
</style>

<div class="fixed w-screen h-screen pointer-events-none lighting 
    {dimLight ? 'dim' : 'light'}
    {offLight ? 'off' : ''}
    ">

</div>

<svg class="fixed w-screen h-screen pointer-events-none" xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise'
      baseFrequency='1' 
      numOctaves='1' 
      stitchTiles='stitch' />
  </filter>

  <rect width='100%' height='100%' filter='url(#noiseFilter)' />
</svg>
