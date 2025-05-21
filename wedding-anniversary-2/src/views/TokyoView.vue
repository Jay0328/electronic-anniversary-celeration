<template>
  <WordingAndAnswer
    :wording-configs="wordingConfigs"
    :is-valid-answer="isValidAnswer"
  />
</template>

<script setup lang="ts">
import WordingAndAnswer from "@/components/WordingAndAnswer.vue";

const wordingConfigs = [
  ["錯綜複雜的路線", 400],
  ["熙來攘往的人潮", 400],
  ["西裝筆挺的身影穿梭在月台與街頭之間", 400],
  ["他們與周遭人們", 250, "，看起來相似", 250, "，卻又不同", 400],
  ["沒有出差", 400, "，也沒有會議", 400],
  ["他們只是牽著手", 400, "，快樂得漫無目的"],
];
const isValidAnswer = (value: string) =>
  value === "新宿" || value.toUpperCase().replace(" ", "") === "SHINJUKU";
</script>
