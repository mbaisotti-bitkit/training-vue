<script>
import { computed, ref, watch } from 'vue';
import { usePaginatorStore, useJsonStore } from "@/store/mainStore.js"
import { storeToRefs } from 'pinia';


export default {
  name: "Paginator",
  props: {
    perPage: Number
  },

  setup(props) {
    const store = usePaginatorStore()

    const itemsStore = useJsonStore()



    // const currentPage = store.currentPage

    // const totalPages = computed(() =>
    //   Math.ceil(props.items.length / props.perPage)
    // )

    // const paginatedItems = computed(() => {
    //   const start = (currentPage.value - 1) * props.perPage
    //   return props.items.slice(start, start + props.perPage)
    // })

    // watch([() => currentPage, () => props.items], () => {
    //   emit("update:page", currentPage.value)
    //   emit("update:paginatedItems", paginatedItems.value)
    // }, { immediate: true })

    // const changePage = (page) => {
    //   if (page >= 1 && page <= totalPages.value) {
    //     currentPage.value = page
    //   }
    // }
    const { 
      currentPage,
      totalPages,
      paginatedItems } = storeToRefs(store)
    const {changePage, paginateItems} = store

    watch([currentPage, () => itemsStore.posts], () =>{
      paginateItems(itemsStore.posts, props.perPage)

    })

    return {
      currentPage,
      totalPages,
      paginatedItems,
      changePage,
      store
    }
  }


}
</script>

<template>
  <div class="p-2">
    <p>
      {{ currentPage }}
    </p>
    <!-- Controlli paginazione -->
    <div class="flex gap-2 justify-center">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
        ◀ Prev
      </button>

      <button v-for="page in totalPages" :key="page" @click="changePage(page)"
        :class="['px-2', { 'font-bold underline': page === currentPage }]">
        {{ page }}
      </button>

      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        Next ▶
      </button>
    </div>
  </div>
</template>