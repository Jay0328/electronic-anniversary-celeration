<template>
  <div class="container">
    <Intro v-if="screen === 'intro'" @end="onIntroEnd"></Intro>
    <Card v-else-if="screen === 'card'" :class="cardStatus" @play="play" />
    <MemoryGame v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Intro from '@/components/Intro.vue'
import Card from '@/components/Card.vue'
import MemoryGame from '@/components/MemoryGame.vue'

const screen = ref<'intro' | 'card' | 'play'>('intro')
const cardStatus = ref<'idle' | 'shown' | 'leaved'>('idle')

const play = () => {
  cardStatus.value = 'leaved'
  window.setTimeout(() => {
    screen.value = 'play'
  }, 1000)
}
const onIntroEnd = () => {
  screen.value = 'card'
  window.setTimeout(() => {
    cardStatus.value = 'shown'
  }, 100)
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.card {
  opacity: 0;

  &.shown {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  &.leaved {
    transform: translateX(-1000px);
    transition: all 1.5s ease-in-out;
  }
}
</style>
