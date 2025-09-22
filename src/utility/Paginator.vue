<template>
  <div class="p-2">

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


<script>
import { watch } from 'vue';
import { usePaginatorStore, useJsonStore } from "@/store/mainStore.js"
import { storeToRefs } from 'pinia';


export default {
  name: "Paginator",
  props: {
    perPage: Number
  },
  emits:
    ["paginate"]
  ,
  setup(props, { emit }) {
    const store = usePaginatorStore()

    const itemsStore = useJsonStore()

    const {
      currentPage,
      totalPages,
      paginatedItems } = storeToRefs(store)
    const { changePage } = store

    watch([currentPage, () => itemsStore.posts], (newVal, oldVal) => {
      emit("paginate", {
        items: itemsStore.posts,
        perPage: props.perPage,
      })
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