<template>
  <div :class="darkMode ? 'bg-gray-700' : 'bg-indigo-700'">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Welcome to the start of Job Ace</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">Setting up this project almost drove me to commit unspeakable acts, none-the-less, here it is.</p>
      <a href="/demo" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
        Go to demo
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
    console.log("Page - Index")
  },
})
</script>
