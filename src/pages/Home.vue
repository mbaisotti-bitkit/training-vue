<script>
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
    <div class="container cent pt-3">
    <div class="my-5 d-flex justify-content-between gap-3" style="width: 30%;">
      <button @click="dec" class="btn btn-primary">-</button>
      <div class="d-flex align-items-center gap-3 p-5" :id="over">
        <h2>{{ num }}</h2>
        <h5> x </h5>
        <h2>2 </h2>
        <h2>= </h2>
        <h2><b>{{ tree }}</b></h2>
      </div>
      <button @click="inc" class="btn btn-secondary">+</button>
    </div>
    <div class="mt-3 neg" v-if="under">
      Numero Negativo
    </div>
  </div>
</template>