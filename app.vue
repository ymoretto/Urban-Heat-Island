<script setup lang="ts">
import { ref, onMounted } from "vue";
import { testFunction } from "@/services/climateService";

const datasets = ref(null);

onMounted(async () => {
  datasets.value = await testFunction();
  console.log("Available datasets:", datasets.value);
});
</script>

<template>
  <div>
    <h1>Climate Datasets</h1>
    <pre>{{ datasets }}</pre>
  </div>
</template>
