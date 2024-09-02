<script setup lang="ts">
definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/" } });
const { signIn } = useAuth();
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <!-- <h1 class="flex justify-center text-4xl font-bold capitalize text-center">
          You must login to interact with this application
        </h1> -->
        <ULandingSection
          title="You must login to interact with this application"
          class="capitalize -mb-12"
        />
        <div class="flex justify-center">
          <UButton  size="xl" label="Login" @click="signIn(`discord`)" />
        </div>
      </div>
    </div>
  </div>
</template>
