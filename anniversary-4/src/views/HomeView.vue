<template>
  <Card
    v-if="screen === 'card'"
    :class="{
      hidden: cardHidden,
    }"
    @show-gift="showGift"
  />
  <div v-else-if="screen === 'gift'" class="gift-container">
    <Gift
      :class="{
        shown: giftShown,
      }"
      @opened="onGiftOpened"
    />
  </div>
  <Scratch
    v-else
    :class="{
      shown: scratchShown,
    }"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Card.vue";
import Gift from "../components/Gift.vue";
import Scratch from "../components/Scratch.vue";

const screen = ref<"card" | "gift" | "scratch">("card");
const cardHidden = ref(false);
const giftShown = ref(false);
const scratchShown = ref(false);

const showGift = () => {
  cardHidden.value = true;

  window.setTimeout(() => {
    screen.value = "gift";
    window.setTimeout(() => {
      giftShown.value = true;
    }, 100);
  }, 1000);
};

const onGiftOpened = () => {
  screen.value = "scratch";
  window.setTimeout(() => {
    scratchShown.value = true;
  }, 100);
};
</script>

<style lang="scss" scoped>
.card {
  &.hidden {
    transition: transform 1s ease-in-out;
    transform: translateX(-100%);
  }
}

.gift-container {
  height: 100%;
  padding-top: 300px;
}

.giftbox {
  margin: 0 auto;
  transform: translateY(100vh);

  &.shown {
    transition: transform 1s ease-in-out;
    transform: translateY(0);
  }
}

.scratch {
  opacity: 0;

  &.shown {
    transition: transform 1.5s ease-in-out;
    opacity: 1;
  }
}
</style>
