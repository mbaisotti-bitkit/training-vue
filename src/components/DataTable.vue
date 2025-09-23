<template>
    <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(value, key) in store.posts[0]" >
                        <template class="d-flex flex-column align-items-center" style="min-width: 50px;">
                            <span>
                                {{ key }}
                            </span>
                            <span v-if="store.sortState.column == key" class="p-2" @click="order(key)">
                                {{ store.sortState.desc ? "&#8593" : "&#8595"}}
                            </span>
                            <span v-else class="p-2" @click="order(key)">
                                <->
                            </span>
                        </template>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in pagStore.paginatedItems">
                    <td v-for="value in post">{{ value }}</td>
                </tr>
            </tbody>    
        </table>
</template>

<script>
import { useJsonStore, usePaginatorStore } from "@/store/mainStore.js"


export default {
    name:"DataTable",
    setup() {
        const pagStore = usePaginatorStore()
        const store = useJsonStore()

        const order = (key) =>{
            pagStore.resetPage();
            store.orderRow(key);
            console.log(store.sortState.column);
            
        }

        return {
            store,
            pagStore,
            order
        }
    }
}


</script>