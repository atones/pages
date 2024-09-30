<script lang="ts">
  import { Input, Radio, ButtonGroup } from 'flowbite-svelte'
  import SignIn from './utils/authentication/SignIn.svelte'
  import MetaTag from '$lib/components/MetaTag.svelte'

  let smsSent = false

  const sendSMS = (e: Event) => {
    const formData = new FormData(e.target as HTMLFormElement)

    const data: Record<string, string | File> = {}
    for (const field of formData.entries()) {
      const [key, value] = field
      data[key] = value
    }

    console.log(data)

    smsSent = true
  }

  const onSubmit = (e: Event) => {
    console.log('submit')
  }
</script>

<MetaTag
  description="Sign in example - Flowbite Svelte Admin Dashboard"
  path="/authentication/sign-in"
  subtitle="Sign in"
  title="Flowbite Svelte Admin Dashboard - Sign in"
/>

<SignIn
  loginTitle={!smsSent ? "인증 요청" : "다음"}
  on:submit={!smsSent ? sendSMS : onSubmit}
  site={{
    name: 'candypay',
    img: '/images/flowbite-svelte-icon-logo.svg',
    link: '/',
    imgAlt: 'FlowBite Logo'
  }}
  title="본인인증"
>
  <Input id="name" name="name" placeholder="이름" required />
  <div class="flex gap-2">
    <Input
      class="border outline-none dark:border-gray-600 dark:bg-gray-700"
      id="birthday"
      inputmode="numeric"
      maxLength="6"
      minLength="6"
      name="birthday"
      placeholder="생년월일 6자리"
      required
      type="tel"
    />
    <ButtonGroup class="border">
      {#each ["남", "여"] as value}
        <Radio class="border-r" custom name="gender" required value={value}>
          <div
            class="px-4 h-full flex items-center justify-center
              peer-checked:text-primary-700 peer-checked:font-bold peer-checked:bg-gray-100 peer-checked:shadow-inner"
          >
            {value}
          </div>
        </Radio>
      {/each}
    </ButtonGroup>
  </div>
  <Input
    class="border outline-none dark:border-gray-600 dark:bg-gray-700"
    id="name"
    inputmode="numeric"
    maxLength="11"
    minLength="10"
    name="name"
    placeholder="휴대폰 번호 (`-` 제외 입력)"
    required
    type="tel"
  />
  {#if smsSent}
    <Input
      class="border outline-none dark:border-gray-600 dark:bg-gray-700"
      id="sms"
      inputmode="numeric"
      maxLength="6"
      minLength="6"
      name="sms"
      placeholder="인증번호 6자리"
      required
      type="tel"
      pattern="[0-9]{6}"
    />
  {/if}
</SignIn>
