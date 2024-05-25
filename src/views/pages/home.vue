<script setup>
import Card from '@/components/card.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const blogLists = ref([])

const isLoading = ref(false)

const getData = async () => {
  isLoading.value = true
  try {
    const response = await axios.get('https://primdev.alwaysdata.net/api/blog')
    if (response.status == 200) {
      blogLists.value = response.data
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-4 p-10">
      <router-link v-for="(data, index) in blogLists" :to="/blog/ + data.slug" :key="index">
        <Card :title="data.title" :content="data.content" />
      </router-link>
      <span v-if="isLoading">Loading...</span>
    </div>
  </div>
</template>
