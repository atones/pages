<script lang="ts">
  import { toCanvas } from 'qrcode'
  import { onMount } from 'svelte'

  export let accountId: string
  export let table: number

  let canvas: HTMLCanvasElement

  const pathname = `market/info/${accountId}?table=${table}`
  const uri = `dl.candypay.co.kr?pn=${pathname}`

  onMount(() => {
    if (!canvas) return
    toCanvas(canvas, uri, {
      width: 147,
      margin: 3,
      color: { dark: '#000C', light: '#F3F3F300' }
    })
  })
</script>

<style lang="postcss">
    figure {
        min-width: 69.8mm;
        min-height: 71.8mm;
        background-image: url('/background-content.png');
        background-size: cover;
        position: relative;
        user-select: none;

        > div {
            position: absolute;
            top: 82px;
            left: 62px;
        }
    }

    canvas {
        border-radius: 0.5rem;
    }
</style>

<figure>
  <div>
    <div class="relative w-fit h-fit">
      <canvas bind:this={canvas}></canvas>
      <div
        class="min-w-10 text-center absolute text-xs top-1/2 left-1/2 border-2 border-white/90 font-semibold bg-black/80 text-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
      >
        {#if table === 0}기본{:else}{table}번{/if}
      </div>
    </div>
  </div>
</figure>