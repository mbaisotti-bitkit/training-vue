<template>
    <div class="row">
        <div v-for="num in storeArr" class="col-4">{{ num }}</div>
    </div>
    <button @click="$emit('pushA')">Pusha</button>
</template>

<script>
export default {
    props: { storeArr: Array },
    emits: ["pushA"]
}
</script>