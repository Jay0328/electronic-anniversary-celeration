<template>
  <WordingAndAnswer
    :wordingConfigs="wordingConfigs"
    input-type="text"
    :is-valid-answer="isValidAnswer"
  />
</template>

<script setup lang="ts">
import WordingAndAnswer from "@/components/WordingAndAnswer.vue";

const wordingConfigs = [
  [
    "記憶核心連線中",
    250,
    ".",
    250,
    ".",
    250,
    ".",
    250,
    ".",
    250,
    ".",
    250,
    ".",
    1000,
  ],
  ["系統狀態：", 400, "異常", 800],
  ["分析記憶毀損日數：", 200, "7", 200, "31", 200, "日", 400],
  ["部分記憶片段", ".", 250, ".", 250, ".", 250, "損毀", 400],
  ["無法還原出完整資料", 800],
  ["即將啟動重建程序：", 400, "《編號 002》", 800],
  ["請輸入", 200, "主體完整編碼", 200, "以嘗試恢復連線"],
];
const isValidAnswer = (value: string) => false;
// value.length === 10 &&
// value.startsWith("O") &&
// value.substring(1, 4) === "200" &&
// value.substring(4, 7) === "384" &&
// value.substring(7, 10) === "043";
</script>
