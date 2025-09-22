<script>
import { RouterView } from 'vue-router';
import { computed, defineComponent, onMounted, onUpdated, ref } from 'vue';

export default defineComponent({
  setup() {
    const num = ref(0);
    const inc = () => num.value++;
    const dec = () => num.value--;
    const tree = computed(() => num.value * 2)

    const over = computed(() => {
      return tree.value > 10 ? "red" : "blue"
    })
    const under = computed(() => {
      return num.value < 0
    })

    onMounted(() => console.log("Mounted"))
    onUpdated(() => console.log(num.value))

    return { num, inc, dec, tree, over, under }

  }
})





</script>

<template>

<RouterView />

</template>

<style scoped></style>
