<script setup lang="ts">
const links = [
  {
    label: "How it Works",
    icon: "mdi:information-outline",
    to: "/about",
  },
  {
    label: "Endorsements",
    icon: "mdi:check-decagram-outline",
    to: "/endorse",
  },
  {
    label: "Voting",
    icon: "mdi:ballot-outline",
    to: "/voting",
  },
  {
    label: "Results",
    icon: "mdi:chart-box-outline",
    to: "/results",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-12" />
    </template>

    <template #right>
      <AuthNav class="hidden lg:flex pr-2"/>
      <UColorModeToggle />
    </template>

    <template #panel>
      <AuthNav class="pb-2"/>
      <UAsideLinks :links="links" />
    </template>
  </UHeader>
</template>
