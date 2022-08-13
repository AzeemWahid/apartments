<script setup lang="ts">
import BedBath from "@/components/newapartment/BedBath.vue";
const numBedBath: number[] = [1, 2, 3];
</script>

<template>
  <form class="flex flex-col m-auto mt-5 w-11/12 shadow-md">
    <div class="ml-5 bg-green-500">New Apartment</div>
    <div class="m-auto bg-green-500">Living Space</div>
    <BedBath class="my-2" title="Bedrooms" :numBedBath="numBedBath"> </BedBath>
    <BedBath class="my-2" title="Bathrooms" :numBedBath="numBedBath"> </BedBath>
  </form>
</template>
