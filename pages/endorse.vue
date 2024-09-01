<script setup>
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } });

import { ref } from "vue";
const { session, status } = useAuth();
const submitted = ref(false);
const submitHandler = async () => {
  submitted.value = true;
};

const ffcheck = false;

let alreadySubmitted = false;

const candidates = [
  {
    value: "can1",
    label: "Candidate 1",
  },
  {
    value: "can2",
    label: "Candidate 2",
  },
  {
    value: "can3",
    label: "Candidate 3",
  },
  {
    value: "can4",
    label: "Candidate 4",
  },
  {
    value: "can5",
    label: "Candidate 5",
  },
  {
    value: "can6",
    label: "Candidate 6",
  },
  {
    value: "can7",
    label: "Candidate 7",
  },
  {
    value: "can8",
    label: "Candidate 8",
  },
  {
    value: "can9",
    label: "Candidate 9",
  },
  {
    value: "can10",
    label: "Candidate 10",
  },
];
</script>

<template>
  <div v-if="alreadySubmitted">
    <h2 class="text-xl capitalize">You have already submitted your Endorsements</h2>
  </div>
  <div v-else-if="ffcheck">
    <NotAvailable />
  </div>
  <div v-else>
    <h1 class="text-3xl font-bold">Endorsements Form</h1>
    <div v-if="status === 'loading'">
      <p>Loading...</p>
    </div>
    <div v-else-if="status === 'authenticated' && submitted">
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
        <pre wrap>{{ value }}</pre>
      </FormKit>
    </div>
  </div>
</template>
