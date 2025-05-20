<template>
  <WordingAndAnswer
    :wording-configs="wordingConfigs"
    input-type="text"
    :is-valid-answer="isValidAnswer"
  />
</template>

<script setup lang="ts">
import WordingAndAnswer from "@/components/WordingAndAnswer.vue";

const wordingConfigs = [["..."]];
const isValidAnswer = (value: string) => value === "30";
</script>
