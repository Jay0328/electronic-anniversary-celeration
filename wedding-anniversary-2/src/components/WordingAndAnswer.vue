<template>
  <WordingContainer>
    <TyperWording :configs="wordingConfigs" @completed="onWordingCompleted" />
    <Input
      v-if="wordingCompleted"
      v-model="answer"
      :error="error"
      @keydown.enter="checkAnswer"
    />
  </WordingContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WordingContainer from "./WordingContainer.vue";
import TyperWording from "./TyperWording.vue";
import Input from "./Input.vue";

interface Props {
  wordingConfigs: (string | number)[][];
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
