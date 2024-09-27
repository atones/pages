<script lang="ts">
  import { Label, Input } from 'flowbite-svelte'
  import SignUp from '../utils/authentication/SignUp.svelte'
  import MetaTag from '$lib/components/MetaTag.svelte'

  const title = 'Create a Free Account'
  const site = {
    name: 'Flowbite',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'FlowBite Logo'
  }
  const acceptTerms = true
  const haveAccount = true
  const btnTitle = 'Create account'
  const termsLink = '/'
  const loginLink = 'sign-in'
  const labelClass = 'space-y-2 dark:text-white'
  const onSubmit = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)

    const data: Record<string, string | File> = {}
    for (const field of formData.entries()) {
      const [key, value] = field
      data[key] = value
    }
    console.log(data)
  }

  const path: string = '/authentication/sign-up'
  const description: string = 'Sign up example - Flowbite Svelte Admin Dashboard'
  const metaTitle: string = 'Flowbite Svelte Admin Dashboard - Sign up'
  const subtitle: string = 'Sign up'
</script>

<MetaTag {description} {path} {subtitle} title={metaTitle} />


<SignUp
  {acceptTerms}
  {btnTitle}
  {haveAccount}
  {loginLink}
  on:submit={onSubmit}
  {site}
  {termsLink}
  {title}
>
  <div>
    <Label class={labelClass}>
      <span>Your email</span>
      <Input
        class="border outline-none dark:border-gray-600 dark:bg-gray-700"
        name="email"
        placeholder="name@company.com"
        required
        type="email"
      />
    </Label>
  </div>
  <div>
    <Label class={labelClass}>
      <span>Your password</span>
      <Input
        class="border outline-none dark:border-gray-600 dark:bg-gray-700"
        name="password"
        placeholder="••••••••"
        required
        type="password"
      />
    </Label>
  </div>
  <div>
    <Label class={labelClass}>
      <span>Confirm password</span>
      <Input
        class="border outline-none dark:border-gray-600 dark:bg-gray-700"
        name="confirm-password"
        placeholder="••••••••"
        required
        type="password"
      />
    </Label>
  </div>
</SignUp>
