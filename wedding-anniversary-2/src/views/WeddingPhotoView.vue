<template>
  <WordingAndAnswer
    :wording-configs="wordingConfigs"
    :is-valid-answer="isValidAnswer"
  />
</template>

<script setup lang="ts">
import WordingAndAnswer from "@/components/WordingAndAnswer.vue";

const wordingConfigs = [
  ["畫面靜止了許久", 400],
  ["時間停留在我們對看的那一瞬間", 400],
  ["他們沒有說話", 400, "，卻彼此明白", 400],
  ["這段美好的回憶", 400],
  ["將永遠留存在那一頁"],
];
const isValidAnswer = (value: string) => value === "19";
</script>
