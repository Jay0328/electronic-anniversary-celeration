<template>
  <div
    class="card"
    :class="{
      flipped: status === MemoryCardStatus.FLIPPED,
      completed: status === MemoryCardStatus.COMPLETED
    }"
  >
    <div class="inner">
      <div class="front">
        <div class="candle">
          <div class="flame" />
        </div>
      </div>
      <div class="back">
        <img :src="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MemoryCardStatus, type MemoryCard } from '@/utils/memoryCardGame'

export interface MemoryCardProps extends MemoryCard {}

defineProps<MemoryCardProps>()
</script>

<style lang="scss" scoped>
.card {
  width: 80px;
  height: 120px;
  perspective: 1000px;
  background-color: transparent;
  transition: opacity 0.6s;
  will-change: opacity;

  &.completed {
    opacity: 0;
  }
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  will-change: transform;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  .flipped &,
  .completed & {
    transform: rotateY(180deg);
  }
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(18, 18, 18);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgb(255, 255, 255);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* Safari */
  overflow: hidden;
}

.candle {
  position: absolute;
  height: 50px;
  width: 12px;
  top: calc(50% + 15px);
  left: 50%;
  margin: auto;
  background: linear-gradient(0deg, #b7f4a7 0%, white 100%);
  border-radius: 4px;
  transform: translate(-50%, -50%) translateZ(120px);
}

.flame {
  position: absolute;
  z-index: 10;
  background: linear-gradient(to bottom, #fff6d9, #fbc36c);
  width: 15px;
  height: 35px;
  border-top-left-radius: 10px 35px;
  border-top-right-radius: 10px 35px;
  border-bottom-right-radius: 10px 10px;
  border-bottom-left-radius: 10px 10px;
  top: -34px;
  left: -1px;
  margin: auto;
  transform-origin: bottom;
  animation: flicker 3s ease-in-out alternate infinite;
  will-change: transform, box-shadow;
  box-shadow: 0 0 17px 3px rgba(251, 246, 190, 0.71);
}

@keyframes flicker {
  0% {
    transform: skewX(5deg);
    box-shadow: 0 0 17px 6px rgba(251, 246, 190, 0.71);
  }
  25% {
    transform: skewX(-5deg);
    box-shadow: 0 0 17px 1px rgba(251, 246, 190, 0.71);
  }
  50% {
    transform: skewX(10deg);
    box-shadow: 0 0 17px 3px rgba(251, 246, 190, 0.71);
  }
  75% {
    transform: skewX(-10deg);
    box-shadow: 0 0 17px 1px rgba(251, 246, 190, 0.71);
  }
  100% {
    transform: skewX(5deg);
    box-shadow: 0 0 17px 6px rgba(251, 246, 190, 0.71);
  }
}

.back {
  transform: rotateY(180deg);
}

img {
  width: 100%;
  height: 100%;
}
</style>
