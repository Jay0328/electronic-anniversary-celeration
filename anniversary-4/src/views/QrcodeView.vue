<template>
  <div class="container">
    請掃描已開啟卡片
    <img class="qrcode" :src="src" />
  </div>
</template>

<script lang="ts" setup>
import { computedAsync } from "@vueuse/core";
import { type QRCodeRenderersOptions, toDataURL } from "qrcode";

const url = "https://github.com/Jay0328/electronic-anniversary-celeration";
const options: QRCodeRenderersOptions = {
  margin: 2,
  scale: 4,
  errorCorrectionLevel: "H",
};
const src = computedAsync(() => toDataURL(url, options));
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.qrcode {
  width: 500px;
  max-width: 100%;
  object-fit: cover;
}
</style>
