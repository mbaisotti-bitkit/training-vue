<template>
    <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(value, key) in items[0]">{{ key }}</th>
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
        
        const items = store.posts

        return {
            items,
            pagStore
        }
    }
}


</script>