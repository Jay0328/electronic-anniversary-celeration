<template>
  <div class="card" :class="statusClass">
    <div class="content" @click="close">
      <div class="wrap">
        <p>Hi birthday person,</p>
        <p>Congratulations with your xxth birthday!</p>
        <p>
          I hope you'll have a splendid day. Lorem ipsum dolor sit amet
          consectetur adipiscing elit.
        </p>
        <p>
          Maecenas sed elit id elit molestie fringilla. Vivamus urna elit,
          bibendum vel congue ullamcorper, interdum ut turpis.
        </p>
        <p>
          Praesent porta magna et scelerisque egestas. Donec ullamcorper dolor
          vitae tempor volutpat.
        </p>
        <p class="signed">Micha&euml;l</p>
        <button @click.stop="emit('show-gift')">領取禮物</button>
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
    font-size: 1.5em;
    text-align: center;
  }
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
