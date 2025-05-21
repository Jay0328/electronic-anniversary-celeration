<template>
  <WordingAndAnswer
    :wording-configs="wordingConfigs"
    :is-valid-answer="isValidAnswer"
  />
</template>

<script setup lang="ts">
import WordingAndAnswer from "@/components/WordingAndAnswer.vue";

const wordingConfigs = [
  ["相隔七小時的時差", 400],
  ["他們牽手漫步在石板路上", 400],
  ["那三座冰封的城市", 400],
];
const isValidAnswer = (value: string) =>
  ["milano", "mvsei vaticani"].includes(value.toLowerCase());
</script>
