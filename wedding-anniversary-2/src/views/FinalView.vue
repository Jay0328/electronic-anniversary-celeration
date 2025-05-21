<template>
  <WordingContainer>
    <TyperWording :configs="wordingConfigs" />
  </WordingContainer>
</template>

<script lang="ts" setup>
import TyperWording from "@/components/TyperWording.vue";
import WordingContainer from "@/components/WordingContainer.vue";

const wordingConfigs = [
  ["首先", 400, "，我會每週假日準時練功🫡", 200],
  ["之前每次都挑高難度髮型來練習", 250],
  ["卻都失敗得一塌糊塗", 200, "，我會按部就班努力練習", 200],
  ["你化妝的時候", "，我可以同時幫你裝扮", 200],
  [".", 250, ".", 250, ".", 250, ".", 250, ".", 250, ".", 250],
  ["謝謝有你"],
  ["總是做好吃的食物", 250, "，跟我分享音樂", 250],
  ["抑或是聽我吐苦水", 250],
  ["不管開心或難過", 250, "，你的懷抱總是讓我安心", 250],
  ["接下來漫長的人生路上", "，有你", 250, "才有完整的我", 250],
  ["祝我們兩週年快樂", 200, "❤️"],
];
</script>
