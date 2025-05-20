<template>
  <div class="container">
    <TyperWording :configs="wordingConfigs" @completed="onWordingCompleted" />
    <Input
      v-if="wordingCompleted"
      v-model="answer"
      :type="inputType"
      :error="error"
      @keydown.enter="checkAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Input from "@/components/Input.vue";
import TyperWording from "./TyperWording.vue";

interface Props {
  wordingConfigs: (string | number)[][];
  inputType: string;
  isValidAnswer: (value: string) => boolean;
}

interface Emits {
  (e: "nextPhase"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const wordingCompleted = ref(false);
const onWordingCompleted = () =>
  setTimeout(() => {
    wordingCompleted.value = true;
  }, 400);

const answer = ref("");
const error = ref(false);
const checkAnswer = () => {
  if (props.isValidAnswer(answer.value.trim())) {
    emit("nextPhase");
  } else {
    error.value = true;
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
}
</style>
