<script setup>
// Check if user is authenticated
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } });

const { session, status } = useAuth();

//Get FF status
const { data: ffcheck } = await useFetch("/api/ff/endorse");
// when FALSE, the form is not available

//Get if user has already submitted
const { data: alreadySubmitted } = await useFetch("/api/checks/endorse");

//Get list of valid candidates
const { data: candidates } = await useFetch("/api/candidates_endorse");

const submitted = ref(false);
const submitHandler = async (fields) => {
  const data = await $fetch("/api/submission/endorse", {
    method: "POST",
    body: fields,
  });
  if (data) {
    submitted.value = true;
  }
};
</script>

<template>
  <div v-if="!ffcheck.status">
    <NotAvailable />
  </div>
  <div v-else-if="alreadySubmitted.status">
    <ULandingSection
      title="You have already submitted your endorsements"
      class="capitalize"
    />
  </div>
  <div v-else class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <UPageHeader
        title="Endorsements Form"
      />
      <div v-if="status === 'loading'">
        <p>Loading...</p>
      </div>
      <div v-else-if="submitted">
        <h2 class="text-xl text-green-500 capitalize">
          Congrats, You have submitted your Endorsements.
        </h2>
      </div>
      <div v-else-if="status === 'authenticated'">
        <FormKit
          type="form"
          id="endorsement"
          :form-class="submitted ? 'hide' : 'show'"
          submit-label="Submit"
          @submit="submitHandler"
          :actions="false"
          #default="{ value }"
        >
          <FormKit type="meta" name="discordID" :value="session?.user?.id" />
          <FormKit type="meta" name="discordName" :value="session?.user?.name" />

          <FormKit
            type="checkbox"
            name="selcCandidates"
            label="Select Endorsements"
            :options="candidates"
            help="You can select up to 5.  There is no ranked voting"
            validation="required|max:5"
            :validation-messages="{
              required: 'Please select at least one candidate',
              max: 'You can only select up to 5 candidates',
            }"

          />
          <FormKit type="submit" />
          <DevOnly>
            <pre wrap>{{ value }}</pre>
          </DevOnly>
        </FormKit>
      </div>
    </div>
  </div>
</template>
