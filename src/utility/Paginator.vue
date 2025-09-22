<script>
import { computed, ref, watch } from 'vue';

export default {
    name: "Paginator",
    props: {
        items: Array,
        perPage: Number
    },

    emits: ["update:page", "update:paginatedItems"],

    setup(props, { emit }) {
        const currentPage = ref(1)

        const totalPages = computed(() =>
            Math.ceil(props.items.length / props.perPage)
        )

        const paginatedItems = computed(() => {
            const start = (currentPage.value - 1) * props.perPage
            return props.items.slice(start, start + props.perPage)
        })

        watch([currentPage, () => props.items], () => {
            emit("update:page", currentPage.value)
            emit("update:paginatedItems", paginatedItems.value)
        }, { immediate: true })

        const changePage = (page) => {
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page
            }
        }

        return {
            currentPage,
            totalPages,
            paginatedItems,
            changePage
        }
    }


}
</script>

<template>
  <div class="p-2">
    <!-- Controlli paginazione -->
    <div class="flex gap-2 justify-center">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
        ◀ Prev
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="['px-2', { 'font-bold underline': page === currentPage }]"
      >
        {{ page }}
      </button>

      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        Next ▶
      </button>
    </div>
  </div>
</template>