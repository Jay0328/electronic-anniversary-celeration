<template>
  <input
    v-model="model"
    class="input"
    :class="{
      error,
    }"
    autocomplete="off"
    placeholder=""
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface InputProps {
  modelValue?: string | null;
  error?: boolean;
}

export interface InputEmits {
  (e: "update:modelValue", value: string | null): void;
}

const props = withDefaults(defineProps<InputProps>(), {
  error: false,
});
const emit = defineEmits<InputEmits>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value ?? "");
  },
});
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: inherit;
  color: #fff;
  outline: none;
}

.error {
  border-color: red;
}
</style>
