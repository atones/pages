<style lang="postcss">
    .formtec-3610 {
        background: white;
        height: 297mm;
        width: 210mm;
        padding-block: 7mm 2.8mm;
        padding-inline: 31.2mm;

        table {
            border-collapse: collapse;
            width: 100%;
            height: 100%;
        }

        table td {
            width: 69.8mm;
            height: 71.8mm;
            /*height: 100%;*/
            padding: 0;
            margin: 0;

            &:nth-child(2) {
                width: 8mm;
                border: none;
            }
        }
    }
</style>

<script lang="ts">
  import { chunk } from '@toss/utils'
  import type { SvelteComponent } from 'svelte'

  const { component: Component, params }: { component: SvelteComponent, params: any[] } = $props()

  const [열, 행] = [2, 4] as const

  // {열}씩 묶어서 행으로 만들기
  const rows: [any | undefined, undefined, any | undefined][] = chunk(params, 열).map((row) => [row?.[0], undefined, row?.[1]])
  // {행}씩 묶어서 페이지로 만들기
  const pages = chunk(rows, 행).map((page) => [...page, ...Array(행 - page.length).fill([undefined, undefined, undefined])])
</script>

<div class="bg-gray-100 p-5 flex flex-col gap-5" id="formtec">
  {#each pages as page}
    <div class="formtec-3610">
      <table>
        <tbody>
        {#each page as [left, _, right]}
          <tr>
            <td>
              {#if left}
                <Component {...left}></Component>
              {/if}
            </td>
            <td></td>
            <td>
              {#if right}
                <Component {...right}></Component>
              {/if}
            </td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>
  {/each}
</div>
