<template>


    <div class="my-5 d-flex justify-content-around">
        <div class="form-check">
            <input value="posts" class="form-check-input" type="radio" name="apiFilters" id="postsRadio" checked
                v-model="filter">
            <label class="form-check-label" for="postsRadio">
                Posts
            </label>
        </div>
        <div class="form-check">
            <input value="albums" class="form-check-input" type="radio" name="apiFilters" id="albumRadio" v-model="filter">
            <label class="form-check-label" for="albumRadio">
                Albums
            </label>
        </div>
        <div class="form-check">
            <input value="photos" class="form-check-input" type="radio" name="apiFilters" id="photoRadio" v-model="filter">
            <label class="form-check-label" for="photoRadio">
                Photos
            </label>
        </div>
        <div class="form-check">
            <input value="todos" class="form-check-input" type="radio" name="apiFilters" id="todoRadio" v-model="filter">
            <label class="form-check-label" for="todoRadio">
                To-Do
            </label>
        </div>
        <div class="form-check">
            <input value="users" class="form-check-input" type="radio" name="apiFilters" id="usersRadio" v-model="filter">
            <label class="form-check-label" for="usersRadio">
                Users
            </label>
        </div>
        <div class="form-check">
            <input value="comments" class="form-check-input" type="radio" name="apiFilters" id="commentsRadio" v-model="filter">
            <label class="form-check-label" for="commentsRadio">
                Comments
            </label>
        </div>
    </div>


</template>

<script>
import { ref, watch } from 'vue';
import { useJsonStore, usePaginatorStore } from "@/store/mainStore.js"
import { storeToRefs } from 'pinia';

export default {
    setup() {
        const store = useJsonStore()
        const pagStore = usePaginatorStore()
        const {filter} = storeToRefs(store)

        watch(filter, (newVal, oldVal) => {
            pagStore.resetPage()
            store.filter = newVal
            store.getPosts()
        })

        return{filter, store}
    }
}
</script>