<template>
  <div v-if="game.isCompleted" class="game-end">
    去尋找寶藏吧~
    <div class="actions">
      <Button class="replay" @click="replay">沒看清楚？再看一次</Button>
      <Button class="replay" @click="showAnswer">什麼不明所以的遊戲，直接告訴我＝＝</Button>
    </div>
    <div v-if="answerShown" class="answer">
      <span class="hide-answer" @click="hideAnswer">x</span>
      睡覺的時候就會看到的照片
    </div>
  </div>
  <div v-else class="card-grid">
    <template v-for="(cardRow, y) in game.cardMatrix" :key="`row-${y}`">
      <MemoryCard
        v-for="(card, x) in cardRow"
        :key="`column-${x}`"
        v-bind="card"
        @pointerdown="onCardClick(x, y)"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { MemoryCardGame } from '@/utils/memoryCardGame'
import MemoryCard from './MemoryCard.vue'
import Button from './Button.vue'

const game = ref(new MemoryCardGame())
const columnsCount = computed(() => game.value.cardMatrix.length)
const answerShown = ref(false)

const replay = () => {
  game.value = new MemoryCardGame()
}
const showAnswer = () => {
  answerShown.value = true
}
const hideAnswer = () => {
  answerShown.value = false
}
const onCardClick = (x: number, y: number) => game.value.flipCard({ x, y })
</script>

<style lang="scss" scoped>
.game-end,
.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-end {
  font-size: 24px;
}

.actions {
  margin-top: 36px;
  gap: 16px;
}

.replay {
  width: 100%;
}

.answer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(16, 20, 24);
}

.hide-answer {
  position: absolute;
  top: 8px;
  right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  font-size: 36px;
  outline: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(v-bind(columnsCount), 1fr);
  gap: 10px;
}
</style>
