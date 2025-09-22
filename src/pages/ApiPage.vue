<template>
    <div class="container">
        <h1 class="my-5 text-center">Booking</h1>

        <ApiFilters
        />

        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(value, key) in store.posts[0]">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in paginatedItems">
                    <td v-for="value in post">{{ value }}</td>
                </tr>
            </tbody>
        </table>

        <Paginator 
        :items="store.posts"
        :per-page="10" 
        @update:page="currentPage = $event"
        @update:paginatedItems="paginatedItems = $event" 
        />


        <!-- <LoadingVue :active=store.loading :can-cancel=false :is-full-page=false></LoadingVue> -->
    </div>
</template>

<script>
import { onMounted, ref, toRef, watch } from "vue";
import ApiFilters from "@/components/ApiFilters.vue"
import { useJsonStore } from "@/store/mainStore.js"
import LoadingVue from "vue3-loading-overlay";
import Paginator from "@/utility/Paginator.vue";


export default {
    components: { ApiFilters, LoadingVue, Paginator },
    setup() {
        const store = useJsonStore()

        let currentPage = ref(1)
        let paginatedItems = ref([])

        onMounted(() => {
            store.getPosts()
        })

        watch(() => store.filter , () =>{
            currentPage.value = 1
        })



        return { store, currentPage, paginatedItems }
    }
}
</script>