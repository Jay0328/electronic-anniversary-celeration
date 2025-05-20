<template>
  <div class="typer">
    <span class="text">{{ displayedText }}</span>
    <span v-if="!completed || cursorPreserved" class="cursor">|</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  configs: (string | number)[];
  speed?: number;
  cursorPreserved?: boolean;
}

interface Emits {
  (e: "completed"): void;
}

const props = withDefaults(defineProps<Props>(), {
  speed: 150,
  cursorPreserved: false,
});

const emit = defineEmits<Emits>();

const splittedConfigs = props.configs.reduce(
  (acc, config) =>
    typeof config === "string"
      ? [...acc, ...config.split("")]
      : [...acc, config],
  [] as (string | number)[]
);
const displayedText = ref("");
const cursor = ref(-1);
const completed = ref(false);

const next = () => {
  cursor.value++;

  if (cursor.value >= splittedConfigs.length) {
    completed.value = true;
    emit("completed");
    return;
  }

  const config = splittedConfigs[cursor.value];
  let delay = props.speed;

  if (typeof config === "string") {
    displayedText.value += config;
  } else {
    delay += config;
  }

  setTimeout(next, delay);
};
onMounted(() => setTimeout(next, props.speed));
</script>

<style scoped>
.typer {
  font-family: monospace;
  white-space: pre-wrap;
  display: inline-flex;
  align-items: center;
}

.text {
  display: inline-block;
}

.cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
  font-weight: normal;
  margin: 0 0 2px -4px;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}
</style>
