<template>
  <div class="scratch">
    <h1>禹杰牌刮刮樂</h1>
    <div class="canvas-container">
      <canvas ref="bgCanvasRef" :width="width" :height="height" />
      <canvas
        ref="fgCanvasRef"
        :width="width"
        :height="height"
        @pointerdown="scratching = true"
        @pointerup="scratching = false"
        @pointermove="onScratch"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const width = 360;
const height = 600;

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
  context.font = "16px Noto Sans TC";
  context.fillText("請截圖存證", 150, 320);
  context.fillText("到禹杰床上領獎", 150, 340);
  context.fillText("10萬出國爽刷", 20, 20);
  context.fillText("鳳凰電波無限贊助", 200, 150);
  context.fillText("下次搬家就養貓貓", 60, 500);
});
watchEffect(() => {
  const canvas = fgCanvasRef.value;

  if (!canvas) return;

  const context = canvas.getContext("2d")!;
  context.fillStyle = "silver";
  context.fillRect(0, 0, width, height);
  context.globalCompositeOperation = "destination-out";
});
</script>

<style lang="scss" scoped>
.scratch {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h1 {
  margin: 40px 0;
  text-align: center;
}

.canvas-container {
  position: relative;
  margin: 0 auto;
  width: 360px;
  touch-action: none;
}

canvas {
  position: absolute;
}
</style>
