<template>
  <div
    ref="boxRef"
    class="giftbox"
    :class="{
      [`step-${step}`]: step,
    }"
    @click="onClick"
  >
    <div class="cover">
      <div></div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script lang="ts" setup>
// https://codepen.io/ElaineXu/pen/EWvGWX

import { ref } from "vue";

export interface GiftEmits {
  (e: "opened"): void;
}

const emit = defineEmits<GiftEmits>();

const boxRef = ref<HTMLElement>();
const step = ref(0);
const stepTimeouts = [1500, 600];

let clicked = false;
const onClick = () => {
  if (clicked) return;

  clicked = true;
  goNextStep();
};

const goNextStep = () => {
  const prevStep = step.value;
  const nextStep = prevStep + 1;

  if (nextStep < 3) {
    step.value = nextStep;
    window.setTimeout(goNextStep, stepTimeouts[prevStep]);
  } else {
    emit("opened");
  }
};
</script>

<style lang="scss" scoped>
.giftbox {
  position: relative;
  width: 300px;
  height: 200px;
  z-index: 10;

  & > div {
    background: #34495e;
    position: absolute;
    &:after,
    &:before {
      position: absolute;
      content: "";
      top: 0;
    }
  }

  .cover {
    width: 100%;
    top: 0;
    left: 0;
    height: 25%;
    z-index: 2;
    &:before {
      position: absolute;
      height: 100%;
      left: 50%;
      width: 50px;
      transform: translateX(-50%);
      background: #fdc56d;
    }
    & > div {
      position: absolute;
      width: 50px;
      height: 50px;
      left: 50%;
      top: -50px;
      transform: translateX(-50%);
      &:before,
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
        box-shadow: inset 0 0 0 15px #fdc56d;
        border-radius: 30px;
        transform-origin: 50% 100%;
      }
      &:before {
        transform: translateX(-45%) skewY(40deg);
      }
      &:after {
        transform: translateX(45%) skewY(-40deg);
      }
    }
  }
  .box {
    right: 5%;
    left: 5%;
    height: 80%;
    bottom: 0;
    &:before {
      width: 50px;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: #fdc56d;
    }
    &:after {
      width: 100%;
      height: 30px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
}

.step-1 {
  animation: wobble 0.5s linear infinite forwards;

  .cover {
    animation: wobble 0.5s linear infinite 0.1s forwards;
  }
}

.step-2:after {
  opacity: 0;
}

.step-2 {
  .cover {
    animation: flyUp 0.4s ease-in forwards;
  }
  .box {
    animation: flyDown 0.2s ease-in 0.05s forwards;
  }
}
@keyframes wobble {
  25% {
    transform: rotate(4deg);
  }
  75% {
    transform: rotate(-2deg);
  }
}
@keyframes flyUp {
  75% {
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) rotate(20deg);
    opacity: 0;
  }
}
@keyframes flyDown {
  75% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
