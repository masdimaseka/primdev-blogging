<script setup>
const prop = defineProps({ title: String, content: String })
</script>

<template>
  <div class="bg-gray-200 p-10 border-2 border-white">
    <div>
      <h1 class="font-bold text-xl uppercase">{{ prop.title }}</h1>
    </div>
    <div>
      <p>{{ prop.content }}</p>
    </div>
  </div>
</template>
