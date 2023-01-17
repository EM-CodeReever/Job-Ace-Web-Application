<template>
    <div :class="darkMode ? 'bg-gray-700' : 'bg-indigo-700'">
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <!-- <span class="block">Boost your productivity.</span>
          <span class="block">Start using Workflow today.</span> -->
          <span class="block">This is the demo page</span>
          <v-btn variant="tonal">
  Veutify Button
</v-btn>
<v-card
    class="mx-auto mt-3"
    width="400"
  >
    <template v-slot:title>
      this is a veutify card
    </template>

    <v-card-text>
      This is content
    </v-card-text>
  </v-card>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
        <a href="/" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
          Back to index
        </a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue"
  
  export default defineComponent({
    props: {
    darkMode: Boolean,
  },
    setup() {
      console.log("Page - demo")
    },
  })
  </script>
  