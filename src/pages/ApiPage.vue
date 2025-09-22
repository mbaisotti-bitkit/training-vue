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
                <tr v-for="post in pagStore.paginatedItems">
                    <td v-for="value in post">{{ value }}</td>
                </tr>
            </tbody>
        </table>

        <Paginator 
        :per-page="10" 
        /> 


        <!-- <LoadingVue :active=store.loading :can-cancel=false :is-full-page=false></LoadingVue> -->
    </div>
</template>

<script>
import { onMounted } from "vue";
import ApiFilters from "@/components/ApiFilters.vue"
import { useJsonStore, usePaginatorStore } from "@/store/mainStore.js"
import LoadingVue from "vue3-loading-overlay";
import Paginator from "@/utility/Paginator.vue";


export default {
    components: { ApiFilters, LoadingVue, Paginator },
    setup() {
        const store = useJsonStore()
        const pagStore = usePaginatorStore()


        onMounted(() => {
            store.getPosts()  //Per riutilizzare Paginator creare nuova action con nuovo percorso API    
        })

        return { store, pagStore }
    }
}
</script>