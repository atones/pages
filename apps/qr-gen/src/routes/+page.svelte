<script lang="ts">
  import TableQR from '$lib/TableQR.svelte'
  import Formtec from '$lib/Formtec.svelte'
  import { range } from '@toss/utils'
  import { toPng } from 'html-to-image'
  import { jsPDF } from 'jspdf'

  export let data: { accountId: string, tables: number }

  async function downloadFormtecToPdf () {
    const pages = document.querySelectorAll('#formtec > .formtec-3610')
    const dataUrls = await Promise.all(Array.from(pages).map((page) => toPng(page as HTMLDivElement)))

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageSize = pdf.internal.pageSize

    for (const [idx, dataUrl] of dataUrls.entries()) {
      if (idx > 0) pdf.addPage()
      pdf.addImage(dataUrl, 'PNG', 0, 0, pageSize.width, pageSize.height)
    }

    pdf.save('formtec.pdf')
  }
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<header class="p-5 border-b border-gray-200 flex items-center justify-center">
  <h1 class="text-2xl font-semibold">테이블오더 QR 스티커 발급</h1>
</header>
<main class="p-5 flex flex-col gap-5">
  <button
    class="bg-gray-100 text-gray-900 p-5 border border-gray-300 hover:brightness-95"
    onclick={downloadFormtecToPdf}
  >
    PDF 다운로드
  </button>
  <p class="text-sm text-gray-500 mt-4">폼텍 3610 규격입니다. QR용 방수지를 사용해주세요.</p>
  <p class="text-sm text-gray-500 mt-4">다운로드시 3초 이상 기다려주세요.</p>
  <Formtec
    component={TableQR}
    params={range(0, data.tables + 1).map((table) => ({ accountId: data.accountId, table }))}
  />
</main>
