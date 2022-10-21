<template>
  <div class="love-cover">
    <canvas ref="canvasRef" :width="480" :height="480" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { drawLoveCover } from "@/utils/loveCover";

const canvasRef = ref<HTMLCanvasElement>();

watchEffect(() => {
  const canvas = canvasRef.value;

  if (!canvas) return;

  drawLoveCover(canvas);
});
</script>

<style lang="scss" scoped>
.love-cover {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 480px;
  overflow: hidden;
}
</style>
