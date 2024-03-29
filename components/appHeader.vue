<template>
     <header class="flex justify-between">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Gökhan Tokmak</NuxtLink
        >
      </div>
      <Menu />
    </header>
</template>

<script setup>

const colorMode = useColorMode()

colorMode.preference = "light"

</script>