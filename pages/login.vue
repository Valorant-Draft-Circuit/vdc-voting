<script setup lang="ts">
definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/" } });
</script>

<template>
  <div>
    <h2 class="text-xl capitalize">You must login to interact with this application</h2>

    <div class="flex justify-center mt-4">
      <AuthNav />
    </div>
  </div>
</template>
