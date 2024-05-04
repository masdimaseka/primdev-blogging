<script setup>
import Card from '@/components/card.vue'
import { ref } from 'vue'

const datas = ref([
  { title: 'judul 1', content: 'konten 1' },
  { title: 'judul 2', content: 'konten 2' }
])
</script>

<template>
  <div>
    <h1 class="text-center font-bold my-8">Homepage</h1>

    <div v-for="(data, index) in datas" :key="index">
      <Card :title="data.title" :content="data.content" />
    </div>
  </div>
</template>
