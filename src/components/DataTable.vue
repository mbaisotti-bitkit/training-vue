<template>
    <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(value, key) in store.posts[0]">
                        <span>
                            {{ key }}
                        </span>
                        <span v-if="store.descOrder" class="p-2" @click="store.orderRow(key)">
                            &#8595
                        </span>
                        <span v-else class="p-2" @click="store.orderRow(key)">
                            &#8593
                        </span>
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

        return {
            store,
            pagStore
        }
    }
}


</script>