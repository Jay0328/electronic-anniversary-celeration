<template>
  <Gift v-if="showGift" />
  <Card v-else @show-gift="showGift = true" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Card.vue";
import Gift from "../components/Gift.vue";

const showGift = ref(false);
</script>
