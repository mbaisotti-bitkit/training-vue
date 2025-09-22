<template>

    <div class="container cent">
        <div class="abc d-flex flex-column align-items-center gap-2">
            <h1>{{ store.str }}</h1>
            <h2 v-if="$route.params.num">{{ $route.params.num }}</h2>
            <!-- <div class="row">
                <div v-for="num in store.arr" class="col-4">{{ num }}</div>
            </div> -->
            <Grid 
            :storeArr="store.arr"
            @pushA="store.pushArr"
            />
            <button class="btn btn-outline-primary" @click="btnClick">CLICK</button>
        </div>
    </div>

</template>


<script>

import Grid from "@/components/Grid.vue";
import { useMainStore } from "@/store/mainStore.js"

export default {
    components:{Grid},
    setup() {
        const store = useMainStore();
        // console.log(id);


        const btnClick = () => {
            store.$patch({ numb: store.numbDiv + store.numb })

            // , str: store.str += "Cons"
            store.conc()
            console.log(store.str);

            store.pushArr()
        }

        // watch([store.arr], (newValue, oldValue) => {
        //     store.conc()
        // })

        return { store, btnClick }
    }
}
</script>
