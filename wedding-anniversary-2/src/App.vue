<template>
  <component
    :key="currentPhase.key"
    :is="currentPhase.component"
    @next-phase="nextPhase"
  />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import VerifyView from "./views/VerifyView.vue";
import WeddingPhotoView from "./views/WeddingPhotoView.vue";

const phases = [
  {
    key: "verify",
    component: VerifyView,
  },
  {
    key: "wedding-photo",
    component: WeddingPhotoView,
  },
];
const getInitialCurrentPhaseIndex = () => {
  try {
    return parseInt(localStorage.getItem("currentPhaseIndex") ?? "0");
  } catch {
    return 0;
  }
};
const currentPhaseIndex = ref(getInitialCurrentPhaseIndex());
const currentPhase = computed(() => phases[currentPhaseIndex.value]);
const nextPhase = () => {
  currentPhaseIndex.value += 1;
  localStorage.setItem("currentPhaseIndex", currentPhaseIndex.value.toString());
};
</script>
