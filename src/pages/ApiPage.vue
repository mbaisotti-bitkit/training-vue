<template>
    <div class="container">
        <h1 class="my-5 text-center">Booking</h1>

        <ApiFilters
        />

        <DataTable 
        />

        <div class="d-flex justify-content-around">
            <Paginator 
            :per-page="10" 
            @paginate="handlePaginate"
            /> 
            <h4>
                Pagina {{ pagStore.currentPage }}
            </h4>
        </div>


        <!-- <LoadingVue :active=store.loading :can-cancel=false :is-full-page=false></LoadingVue> -->
    </div>
</template>

<script>
import { onMounted, watch } from "vue";
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
            store.getPosts()  //Per riutilizzare Paginator cambiare filter in nuovo endpoint API    

        })

        const handlePaginate = ({items, perPage}) =>{
            if ( store.ordered ) {
                store.orderRow(store.row)
                pagStore.paginateItems(items, perPage)                                
            }else {
                pagStore.paginateItems(items, perPage)
            }
        }

        return { store, pagStore, handlePaginate}
    }
}
</script>