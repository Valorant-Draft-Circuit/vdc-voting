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
    to: "#",
  },
  {
    label: "Voting",
    icon: "mdi:ballot-outline",
    to: "#",
  },
  {
    label: "Results",
    icon: "mdi:chart-box-outline",
    to: "#",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-12" />
    </template>

    <template #right>
      <UColorModeToggle />
    </template>
  </UHeader>
</template>
