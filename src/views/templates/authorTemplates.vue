<script setup>
import Sidebar from '@/components/layout/sidebar.vue'
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen h-full">
    <div class="grid grid-cols-12 h-full">
      <Sidebar class="col-span-2 sticky top-0 h-screen bg-gray-400 text-white" />
      <div class="col-span-10">
        <div>
          <Header class="border-b py-3" />
          <RouterView class="section p-10"></RouterView>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
