<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";

const props = defineProps<{
  title: string;
  numBedBath: number[];
}>();

onMounted(() => {
  for (let i = 1; i <= props.numBedBath.length; i++) {
    isActive[i] = false;
    //console.log(i);
  }
});

const isActive: boolean[] = reactive([]);

//scenarios
// 1) turn on a button when everything else is off -> beginning always
// check if everything else is off then turn on

// 2) turn on a button while another button is on
// check if anything else is on, turn it off and then turn on

// 3) turn off a button
// set class to false

let checked = (num: number) => {
  let allOff: boolean[] = [];

  // 1) check if everything else is off
  isActive.forEach((element, index) => {
    if (element == false) {
      allOff[index] = true;
    }
  });
  // then turn on
  allOff.forEach((element) => {
    if ((allOff[num] = true)) {
      isActive[num] = true;
    }
  });
  //   //turn off a button
  //   isActive[num] = false;
  //   //turn off everything
  //   isActive.forEach((element, index) => {
  //     if (element == true) {
  //       isActive[index] = false;
  //     }
  //   });
};
</script>

<template>
  <div class="flex ml-5">
    <span class="mr-3">No. {{ title }}</span>

    <!-- <span
      class="mr-3 px-3 py-1 rounded-sm bg-blue-500"
      v-for="num in numBedBath"
    >
      <input
        class="appearance-none"
        v-model="checked"
        type="radio"
        :id="title + num.toString()"
        :value="num.toString()"
      />
      <label :for="title + num.toString()"> {{ num }} </label>
    </span> -->

    <button
      class="mr-3 px-3 py-1 rounded-sm bg-blue-500"
      :class="{ [`bg-red-500`]: isActive[num] }"
      type="button"
      @click="checked(num)"
      v-for="num in numBedBath"
    >
      {{ num }}
    </button>

    <div class="flex rounded-sm ring-1 ring-blue-500">
      <input
        class="w-8 rounded-sm text-center focus:outline-none placeholder:text-xl"
        placeholder="+"
      />
      <button class="px-1 rounded-tr-sm rounded-br-sm bg-blue-500">
        <i class="las la-arrow-right"></i>
      </button>
    </div>
  </div>
</template>
