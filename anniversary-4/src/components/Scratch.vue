<template>
  <div class="scratch">
    如中獎請找禹杰領獎
    <div class="canvas-container">
      <canvas ref="bgCanvasRef" :width="300" :height="300" />
      <canvas
        ref="fgCanvasRef"
        :width="300"
        :height="300"
        @pointerdown="scratching = true"
        @pointerup="scratching = false"
        @pointermove="onScratch"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const bgCanvasRef = ref<HTMLCanvasElement>();
const fgCanvasRef = ref<HTMLCanvasElement>();

const scratching = ref(false);

const onScratch = (event: MouseEvent) => {
  if (!scratching.value) return;

  const canvas = fgCanvasRef.value!;
  const context = canvas.getContext("2d")!;
  const x = event.offsetX;
  const y = event.offsetY;
  context.beginPath();
  context.arc(x, y, 20, 0, Math.PI * 2);
  context.fill();
};

watchEffect(() => {
  const canvas = bgCanvasRef.value;

  if (!canvas) return;

  const context = canvas.getContext("2d")!;
  context.font = "30px Microsoft JhengHei, PMingLiU, sans-serif";
  context.fillText("恭喜獲得信義區豪宅", 100, 180);
});
watchEffect(() => {
  const canvas = fgCanvasRef.value;

  if (!canvas) return;

  const context = canvas.getContext("2d")!;
  context.fillStyle = "silver";
  context.fillRect(0, 0, 450, 380);
  context.globalCompositeOperation = "destination-out";
});
</script>

<style lang="scss" scoped>
.scratch {
}

.canvas-container {
  position: relative;
}

canvas {
  position: absolute;
}
</style>
