<script lang="ts">
  import MetaTag from '$lib/components/MetaTag.svelte'

  const path: string = ''
  const description: string = 'Admin Dashboard example using Flowbite Svelte'
  const title: string = 'Flowbite Svelte Admin Dashboard - Home'
  const subtitle: string = 'Admin Dashboard'
</script>

<MetaTag {description} {path} {subtitle} {title} />
<main class="p-4">
  <!--  <Dashboard {data} />-->
</main>
