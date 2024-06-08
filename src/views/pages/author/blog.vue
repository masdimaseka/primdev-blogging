<script setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/card.vue'
import getAuthor from '@/helper/getAuthor'
import axios from 'axios'
import { baseUrl, token } from '@/helper/GlobalVariable'

const blogLists = ref([])

const isLoading = ref(false)

const getData = async () => {
  isLoading.value = true
  try {
    const author = await getAuthor()
    const response = await axios.get(baseUrl + '/blog/author/' + author.id, {
      headers: { Authorization: `Bearer ${token}` }
    })
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
    <div class="mb-8 flex justify-between">
      <h1 class="text-3xl font-bold">Blog</h1>
      <router-link to="blog/create" class="p-2 bg-blue-400 text-white rounded">Create</router-link>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <Card
        v-for="(item, index) in blogLists"
        :key="index"
        :title="item.title"
        :content="item.content"
        :blog_id="item.id"
      />
    </div>
  </div>
</template>
