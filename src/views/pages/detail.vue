<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { baseUrl } from '@/helper/GlobalVariable'

const slug = useRoute().params.slug
const blogDetail = ref(null)
console.log(slug)
const isLoading = ref(false)

const getDataDetail = async () => {
  isLoading.value = true
  try {
    const response = await axios.get(baseUrl + '/blog/' + slug)
    if (response.status == 200) {
      blogDetail.value = response.data
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getDataDetail()
})
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <div v-else-if="blogDetail">
    <img :src="blogDetail.image" alt="" width="240" />
    <h1>{{ blogDetail.title }}</h1>
    <p>{{ blogDetail.content }}</p>
  </div>
</template>
