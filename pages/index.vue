<template>
  <ULandingHero
    title="Valorant Draft Circuit Voting"
    :links="[{ label: 'Learn More', icon: 'mdi:book-open-variant', size: 'lg', to: '/about'}]"
  >
    <template #headline>
      <UButton
        color="gray"
        label="Endorsements are now Open!"
        to="/endorse"
        trailing-icon="i-heroicons-arrow-right"
        size="xs"
        class="rounded-full"
      />
    </template>
  </ULandingHero>
</template>
