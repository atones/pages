<script>
  import AppsMenu from '../utils/widgets/AppsMenu.svelte'
  import UserMenu from '../utils/widgets/UserMenu.svelte'
  import {
    Dropdown,
    DropdownItem,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Navbar,
    Search
  } from 'flowbite-svelte'
  import { ChevronDownOutline } from 'flowbite-svelte-icons'
  import '../../app.pcss'
  import Users from '../data/users.json'

  export let fluid = true
  export let drawerHidden = false
  export let list = false
</script>

<Navbar class="text-black" color="default" {fluid} let:NavContainer>
  <NavContainer class="mb-px mt-px px-1" {fluid}>
    <NavHamburger
      class="m-0 me-3 md:block lg:hidden"
      onClick={() => (drawerHidden = !drawerHidden)}
    />
    <NavBrand class={list ? 'w-40' : 'lg:w-60'} href="/">
      <img
        alt="Flowbite Logo"
        class="me-2.5 h-6 sm:h-8"
        src="/images/flowbite-svelte-icon-logo.svg"
      />
      <span
        class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
      >
				Flowbite
			</span>
    </NavBrand>
    <div class="hidden lg:block lg:ps-3">
      {#if list}
        <NavUl class="ml-2" activeUrl="/" activeClass="text-primary-600 dark:text-primary-500">
          <NavLi href="/">Home</NavLi>
          <NavLi href="#top">Messages</NavLi>
          <NavLi href="#top">Profile</NavLi>
          <NavLi href="#top">Settings</NavLi>
          <NavLi class="cursor-pointer">
            Dropdown
            <ChevronDownOutline class="ms-0 inline" />
          </NavLi>
          <Dropdown class="z-20 w-44">
            <DropdownItem href="#top">Item 1</DropdownItem>
            <DropdownItem href="#top">Item 2</DropdownItem>
            <DropdownItem href="#top">Item 3</DropdownItem>
          </Dropdown>
        </NavUl>
      {:else}
        <form>
          <Search size="md" class="mt-1 w-96 border focus:outline-none" />
        </form>
      {/if}
    </div>
    <div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
      <AppsMenu />
      <UserMenu {...Users[4]} />
    </div>
  </NavContainer>
</Navbar>
