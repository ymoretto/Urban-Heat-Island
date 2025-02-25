<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchDatasets } from "@/services/climateService";
const API_KEY = useRuntimeConfig().public.NCDC_API_KEY as string;
const BASE_URL = useRuntimeConfig().public.NCDC_API_URL as string;

const datasets = ref(null);

onMounted(async () => {
  datasets.value = await fetchDatasets(BASE_URL, API_KEY);
  console.log("Available datasets:", datasets.value);
});
</script>

<template>
  <div>
    <h1>Climate Datasets</h1>
    <pre>{{ datasets }}</pre>
  </div>
</template>
