<template>
  <div class="intro" :class="phase">
    <div class="from top">Hi</div>
    <div class="from left">涵涵寶寶</div>
    <div class="from right">恭喜你</div>
    <div class="from bottom age-container">
      <div class="digits one">1</div>
      <div class="age">
        <div class="tens digits">{{ tensDigits }}</div>
        <div class="digits">{{ unitsDigits }}</div>
      </div>
    </div>
    <div class="from bottom">歲了</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref } from 'vue'

export interface IntroEmits {
  (e: 'end'): void
}

const emit = defineEmits<IntroEmits>()

type Phase =
  | 'idle'
  | 'enter'
  | 'one-idle'
  | 'one-shown'
  | 'one-walking'
  | 'one-jumping'
  | 'one-done'
  | 'shaked'
  | 'falling'

const phase = ref<Phase>('idle')

const age = ref(0)
const tensDigits = computed(() => Math.floor(age.value / 10))
const unitsDigits = computed(() => age.value % 10)

const start = () => {
  window.setTimeout(() => {
    phase.value = 'enter'

    window.setTimeout(incrementAgeAnimation, 1000)
  }, 250)
}

const incrementAge = () => {
  age.value++
}
const incrementAgeAnimation = () => {
  window.setTimeout(() => {
    incrementAge()

    if (age.value < 28) {
      incrementAgeAnimation()
    } else {
      oneStart()
    }
  }, 50)
}

const oneStart = () => {
  window.setTimeout(() => {
    phase.value = 'one-idle'
    window.setTimeout(() => {
      phase.value = 'one-shown'
      window.setTimeout(() => {
        phase.value = 'one-idle'
        window.setTimeout(oneWalk, 250)
      }, 1000)
    }, 400)
  }, 250)
}

const oneWalk = () => {
  phase.value = 'one-walking'
  window.setTimeout(oneJump, 1500)
}

const oneJump = () => {
  phase.value = 'one-jumping'
  window.setTimeout(() => {
    age.value = 18
    nextTick(() => {
      window.setTimeout(() => {
        phase.value = 'one-done'
        window.setTimeout(end, 400)
      }, 200)
    })
  }, 3200)
}

const end = () => {
  phase.value = 'shaked'
  window.setTimeout(() => {
    phase.value = 'falling'
    window.setTimeout(() => {
      emit('end')
    }, 1500)
  }, 2000)
}

onMounted(start)
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 36px;
  text-align: center;

  &.falling {
    animation: falling 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.79, 0, 0.8, 0.13);
  }
}

.from,
.digits {
  .shaked & {
    animation: shake 0.5s;
    animation-iteration-count: 3;
  }

  .falling & {
    transform: rotate(30deg);
  }
}

.from {
  transition: transform 0.3s;
  transform: translateY(0);

  &.top {
    .idle & {
      transform: translateY(-500px);
    }
  }

  &.left {
    .idle & {
      transform: translateX(-500px);
    }

    .enter & {
      transition-delay: 0.3s;
    }
  }

  &.right {
    .idle & {
      transform: translateX(500px);
    }

    .enter & {
      transition-delay: 0.6s;
    }
  }

  &.bottom {
    .idle & {
      transform: translateY(500px);
    }

    .enter & {
      transition-delay: 0.9s;
    }
  }
}

.age-container {
  display: flex;
  flex-direction: column;
  margin: 16px 0;
}

.age,
.digits {
  display: inline-flex;
  align-items: center;
}

.age {
  gap: 16px;
}

.digits {
  font-size: 108px;
  line-height: 1em;
}

.one {
  justify-content: flex-start;
  height: 1em;
  transition:
    height 0.3s,
    transform 0.3s;
  overflow: hidden;

  .idle &,
  .enter & {
    height: 0;
    transform: translateX(100vw);
  }

  .one-idle &,
  .one-shown & {
    transform-origin: bottom left;
  }

  .one-idle & {
    transform: translateX(calc(50vw + 80px));
  }

  .one-shown & {
    transform: translateX(calc(50vw + 80px)) rotate(-45deg);
  }

  .one-walking & {
    transform: translateX(0);
    transition: transform 1.5s ease-in-out;
  }

  .one-done &,
  .shaked &,
  .falling & {
    visibility: hidden;
    height: 0;
  }
}

.one-jumping {
  .one,
  .tens {
    transform-origin: bottom;
  }

  .one {
    animation:
      one-jumping-1 0.3s 1 0s cubic-bezier(0, 0, 0.3642, 1),
      one-jumping-2 0.3s 1 0.3s cubic-bezier(0.6358, 0, 1, 1),
      one-jumping-3 0.3s 1 0.6s cubic-bezier(0, 0, 0.3642, 1),
      one-jumping-4 0.3s 1 0.9s cubic-bezier(0.6358, 0, 1, 1),
      one-jumping-1 0.3s 1 1.2s cubic-bezier(0, 0, 0.3642, 1),
      one-jumping-2 0.3s 1 1.5s cubic-bezier(0.6358, 0, 1, 1),
      one-jumping-3 0.3s 1 1.8s cubic-bezier(0, 0, 0.3642, 1),
      one-jumping-4 0.3s 1 2.1s cubic-bezier(0.6358, 0, 1, 1),
      one-jumping-1 0.3s 1 2.4s cubic-bezier(0, 0, 0.3642, 1),
      one-jumping-2 0.3s 1 2.7s cubic-bezier(0.6358, 0, 1, 1),
      one-jumping-end 0.1s 1 3s ease forwards;
  }

  .tens {
    animation:
      tens-jumping-1 0.3s 1 0.6s cubic-bezier(0, 0, 0.3642, 1),
      tens-jumping-2 0.3s 1 0.9s cubic-bezier(0.6358, 0, 1, 1),
      tens-jumping-1 0.3s 1 1.8s cubic-bezier(0, 0, 0.3642, 1),
      tens-jumping-2 0.3s 1 2.1s cubic-bezier(0.6358, 0, 1, 1),
      tens-jumping-end 0.1s 1 3s ease forwards;
  }
}

@keyframes one-jumping-1 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}

@keyframes one-jumping-2 {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes one-jumping-3 {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(80px);
  }
}

@keyframes one-jumping-4 {
  0% {
    transform: translateY(80px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes one-jumping-end {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(108px);
  }
}

@keyframes tens-jumping-1 {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0.5);
  }
}

@keyframes tens-jumping-2 {
  0% {
    transform: scaleY(0.5);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes tens-jumping-end {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

@keyframes falling {
  0% {
    transform: translateY(0);
  }

  5% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(1500px);
  }
}
</style>
