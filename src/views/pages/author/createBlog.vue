<script setup>
import baseInput from '@/components/baseInput.vue'
import baseTextArea from '@/components/baseTextArea.vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { baseUrl, token } from '@/helper/GlobalVariable'

const input = reactive({
  title: '',
  content: ''
})

const isLoading = ref(false)
const router = useRouter()

const createBlog = async () => {
  isLoading.value = true
  try {
    const formData = new FormData()
    formData.append('title', input.title)
    formData.append('content', input.content)
    formData.append('image', document.getElementById('image').files[0])
    const response = await axios.post(baseUrl + '/blog/store', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'multipart/form-data'
      }
    })
    if (response.status === 200 || response.status === 201) {
      isLoading.value = false
      router.push('/blog')
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Create Blog</h1>
    <form @submit.prevent="createBlog" action="" class="mt-5 grid grid-cols-1 gap-y-6">
      <baseInput
        v-model="input.title"
        inputType="text"
        inputPlaceholder="enter blog title"
        inputTitle="blog title"
        inputName="blogTitle"
      />
      <baseTextArea
        v-model="input.content"
        inputType="text"
        inputPlaceholder="enter blog content"
        inputTitle="blog content"
        inputName="blogContent"
      />
      <input type="file" name="image" id="image" />
      <button class="btn - btn-primary w-fit bg-blue-500" type="submit">
        <div role="status" v-if="isLoading">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <span v-else>Create</span>
      </button>
    </form>
  </div>
</template>
