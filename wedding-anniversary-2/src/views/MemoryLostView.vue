<template>
  <WordingAndAnswer
    :wording-configs="wordingConfigs"
    :is-valid-answer="isValidAnswer"
  />
</template>

<script setup lang="ts">
import WordingAndAnswer from "@/components/WordingAndAnswer.vue";

const wordingConfigs = [
  ["系統嘗試擷取記憶完畢", 400],
  ["系統嘗試重建記憶中"],
  [250, ".", 250, ".", 250, ".", 250, ".", 250, ".", 250, ".", 250],
  ["仍有幾處畫面出現錯位", 400, "，檢測原因中"],
  [250, ".", 250, ".", 250, ".", 250, ".", 250, ".", 250, ".", 250],
  ["她的笑容完美、行程無誤、衣服也挑得很好——", 400],
  ["卻少了一雙", 400, "，為她完成造型的手"],
];
const isValidAnswer = (value: string) =>
  value.replace("-", "").replace("/", "") === "20251008";
</script>
