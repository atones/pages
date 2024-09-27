<script lang="ts">
  import { Button, Card } from 'flowbite-svelte'

  export let title = 'Sign in to platform'
  export let site = {
    name: 'Flowbite',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'FlowBite Logo'
  }
  export let loginTitle = 'Login to your account'

  export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full'
  export let mainDivClass =
    'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900'
  export let siteLinkClass =
    'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white'
  export let siteImgClass = 'mr-4 h-11'
  export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white'
</script>

<main class={mainClass}>
  <div class={mainDivClass}>
    <a class={siteLinkClass} href={site.link}>
      <img alt={site.imgAlt} class={siteImgClass} src={site.img} />
      <span>{site.name}</span>
    </a>
    <!-- Card -->
    <Card border={false} class="w-full" size="md">
      <h1 class={cardH1Class}>
        {title}
      </h1>
      <form class="mt-8 space-y-6" on:submit|preventDefault>
        <slot />
        <Button size="lg" type="submit">{loginTitle}</Button>
      </form>
    </Card>
  </div>
</main>
