<template>
  <div class="card">
    <p>嗨~我家尊絕不凡的好運喵喵</p>
    <p>在此先感謝可愛的寶寶讓我有這個榮幸可以陪你度過5次的生日，這個大恩大德我會用一輩子來報答的</p>
    <p>今年因緣際會我們一起出了好多次國，累積了好多的回憶，希望今年的每趟旅程中你都能覺得快樂</p>
    <p>
      只要你開心，我也會跟著很開心，覺得平常的努力工作都值得了XD，明年就再讓我牽著你的手一起到世界各地走走吧~
    </p>
    <p>在此鄭重地宣佈<br />陳家女神 aka St.好運喵喵<br />今年也會是個健康快樂的小寶寶!!!</p>
    <p>
      我把禮物放在了某個奇怪的地方，在遊玩的過程請記住各個照片並猜猜禮物在哪張圖片的後面吧~希望你會喜歡這個禮物~
    </p>
    <p class="signed">Jay, 2023-10-28</p>
    <Button class="play" @click.stop="emit('play')">開始</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from './Button.vue'

export interface CardEmits {
  (e: 'play'): void
}

const emit = defineEmits<CardEmits>()
</script>

<style lang="scss" scoped>
.card {
  font-size: 1.1em;
  line-height: 1.4;
  font-style: italic;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5em 2.5em;
  box-shadow: inset 2px 0 1px rgba(0, 0, 0, 0.05);
}

p {
  margin-top: 1em;

  &:first-child {
    margin-top: 0;
  }

  &.signed {
    margin-top: 1.5em;
    font-size: 0.8em;
    text-align: right;
  }
}

.play {
  margin: 20px 0 0 0;
}
</style>
