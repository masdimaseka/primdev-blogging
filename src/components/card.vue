<script setup>
import { useRoute } from 'vue-router'
import { baseUrl, token } from '@/helper/GlobalVariable'
import axios from 'axios'

const prop = defineProps({
  title: String,
  content: String,
  blog_id: Number
})

const router = useRoute().name

const deleteBlog = async () => {
  try {
    const response = await axios.post(
      baseUrl + '/blog/' + prop.blog_id,
      {
        _method: 'delete'
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (response.status === 200) {
      location.reload()
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="bg-slate-100 p-4 rounded">
    <h1 class="text-2xl font-bold">{{ prop.title }}</h1>
    <p class="text-lg">{{ prop.content }}</p>
    <div v-show="router == 'author-blog'" class="mt-4 flex gap-3">
      <router-link to="blog/update" class="p-2 bg-blue-400 text-white rounded">update</router-link>
      <button class="p-2 bg-red-400 text-white rounded" @click="deleteBlog">delete</button>
    </div>
  </div>
</template>
