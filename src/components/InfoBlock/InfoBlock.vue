<template>
  <div class="infoblock" :class="{active : open}">
    <img src="@/assets/images/close.svg" class="infoblock__close" @click="$emit('close')" alt="" />
    <div class="infoblock__block">
      <img class="infoblock__block-img" src="@/assets/images/block.jpg" alt="">
      <div class="infoblock__block-content">
        <div class="infoblock__block-info">
          <h2 class="infoblock__block-title">
            Шан-Чи и легенда десяти колец
          </h2>
          <p class="infoblock__block-info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh bibendum
            nec, pulvinar id in in ac nisl semper. Condimentum tellus ac integer condimentum. Amet, vitae dictum convallis
            dignissim. Lacus, suscipit sagittis, adipiscing metus, risus convallis sit...
          </p>
          <p class="infoblock__block-info-desc">
            <span>2021, боевик, приключения, фэнтези</span>
            <span>2h 12m</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  current:Object,
  open:Boolean,
  type: String,
})
</script>