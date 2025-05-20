<template>
  <div class="wording">
    <TyperText
      v-for="(configs, index) in displayConfigs"
      :key="index"
      :configs="configs"
      :cursor-preserved="currentIndex == index"
      @completed="next(index + 1)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import TyperText from "./TyperText.vue";

interface Props {
  configs: (string | number)[][];
  delay?: number;
}

interface Emits {
  (e: "completed"): boolean;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 1000,
});
const emit = defineEmits<Emits>();

const currentIndex = ref(-1);
const displayConfigs = computed(() =>
  props.configs.slice(0, currentIndex.value + 1)
);

const next = (nextIndex: number) => {
  if (nextIndex >= props.configs.length) {
    emit("completed");
  } else {
    currentIndex.value = nextIndex;
  }
};

onMounted(() => setTimeout(() => next(0), props.delay));
</script>

<style scoped>
.wording {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}
</style>
