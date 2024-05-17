<script setup>
import baseInput from '@/components/baseInput.vue'
import baseTextArea from '@/components/baseTextArea.vue'
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Update Blog</h1>
    <form action="" class="mt-5 grid grid-cols-1 gap-y-6">
      <baseInput
        inputType="text"
        inputPlaceholder="enter blog title"
        inputTitle="blog title"
        inputName="blogTitle"
      />
      <baseTextArea
        inputType="text"
        inputPlaceholder="enter blog content"
        inputTitle="blog content"
        inputName="blogContent"
      />
    </form>
  </div>
</template>
