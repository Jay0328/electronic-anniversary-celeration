<template>
  <div class="card" :class="statusClass">
    <div class="content" @click="close">
      <div class="wrap">
        <p>嗨~我家的可愛寶貝喵喵</p>
        <p>
          不知不覺我們認識超過四年了，也習慣了你每天陪伴在我身邊的日常，有時候我獨自在家的時候總是覺得不太自在，
          你的存在好像漸漸地變成我這個人的一部份。
        </p>
        <p>
          就算晚上的時候我們各自做著不同的事，只要有你在我身邊，我就會覺得我的心是平靜的，你對我來說就是有種神秘的喵喵力量。
        </p>
        <p>最愛你了，以後也會一直愛你</p>
        <p>希望接下來我們也能一樣快樂</p>
        <p class="signed">Jay, 2022-10-22</p>
        <button class="receive-gift" @click.stop="emit('show-gift')">
          領取禮物
        </button>
      </div>
    </div>
    <div class="cover" @click="open">
      <div class="wrap">
        <LoveCover />
        <h1>Angie & Jay</h1>
        <h1>4th</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import LoveCover from "./LoveCover.vue";

export interface CardEmits {
  (e: "show-gift"): void;
}

const emit = defineEmits<CardEmits>();

const opened = ref(false);
const transitionStatus = ref<"half" | "fully">("fully");
const statusClass = computed(
  () => `${opened.value ? "open" : "close"}-${transitionStatus.value}`
);
const setOpen = (value: boolean) => {
  if (transitionStatus.value === "fully") {
    opened.value = value;
  }
};
const open = () => setOpen(true);
const close = () => setOpen(false);

watch(opened, (_, __, onInvalidate) => {
  transitionStatus.value = "half";
  const timer = window.setTimeout(() => {
    transitionStatus.value = "fully";
  }, 1000);

  onInvalidate(() => {
    window.clearTimeout(timer);
  });
});
</script>

<style lang="scss" scoped>
.card,
.cover,
.content {
  height: 100vh;
  max-height: 900px;
}

.card {
  position: relative;
  width: 390px;
  transform-style: preserve-3d;
  perspective: 5000px;
}

.cover,
.content {
  position: absolute;
  width: 100%;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.5);
}

.cover {
  position: relative;
  color: #ffdfdf;
  background-image: url(@/assets/love-cover.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  transform-origin: left;
  transition: transform 1s linear;

  h1 {
    font-family: "Dancing Script", sans-serif;
    text-align: center;
  }
}

.content {
  font-size: 1.1em;
  line-height: 1.4;
  font-family: "Nobile";
  color: #331717;
  font-style: italic;
}

.wrap {
  height: 100%;

  .cover & {
    transition: background 1s linear;
  }

  .content & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5em 2.5em;
    background: #ffefef;
    box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
  }
}

p {
  margin-top: 1em;

  &:first-child {
    margin-top: 0;
  }

  &.signed {
    margin-top: 1.5em;
    font-family: "Dancing Script", sans-serif;
    font-size: 0.8em;
    text-align: right;
  }
}

.receive-gift {
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px 0;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #ed6ea0,
    #ec8c69,
    #f7186a,
    #fbb03b
  );
  box-shadow: 0 4px 15px 0 rgb(236 116 149 / 75%);
}

.card.open-half .cover,
.card.close-half .cover {
  transform: rotateY(-90deg);
}
.card.open-half .cover .wrap {
  background-color: rgba(0, 0, 0, 0.5);
}

.card.open-fully .cover,
.card.close-half .cover {
  background: #ffefef;
}

.card.open-fully .cover {
  transform: rotateY(-180deg);
}

.card.open-fully .cover .wrap {
  background-color: rgba(0, 0, 0, 0);
}

.card.open-fully .cover .wrap *,
.card.close-half .cover .wrap * {
  display: none;
}
</style>
