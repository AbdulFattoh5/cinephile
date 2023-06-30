<template>
  <div class="infoblock">
    <img
      src="@/assets/images/close.svg"
      class="infoblock__close"
      @click="$emit('close')"
      alt=""
    />
  </div>
</template>

<script setup>
    const props = defineProps()
</script>
