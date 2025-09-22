<template>
    <div class="container">
        <h1 class="my-5 text-center">Booking</h1>

        <ApiFilters
        />

        <DataTable 
        />

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
import DataTable from "@/components/DataTable.vue";


export default {
    components: { ApiFilters, LoadingVue, Paginator, DataTable },
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