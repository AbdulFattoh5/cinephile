<template>
  <div class="infoblock" :class="{ active: open }">
    <img
      src="@/assets/images/close.svg"
      class="infoblock__close"
      @click="$emit('close')"
      alt=""
    />
    <div class="infoblock__block" v-if="current">
      <img
        class="infoblock__block-img"
        :src="imgUrlFull + current.backdrop_path"
        alt=""
      />
      <div class="infoblock__block-content">
        <div class="infoblock__block-info">
          <h2 class="infoblock__block-title">
            {{ current.title || current.name }}
          </h2>
          <p class="infoblock__block-info-text">
            {{ truncateTitle(current.overview) }}
          </p>
          <p class="infoblock__block-info-desc">
            <span>
              {{
                new Date(current.first_air_date).getFullYear() ||
                new Date(current.release_date).getFullYear()
              }}
            </span>
            <span>{{ getGenres }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { imgUrlFull } from "@/static";
const props = defineProps({
  current: Object,
  open: Boolean,
  type: String,
});
const getGenres = computed(() =>
  props.current.genres.reduce((acc, item) => acc + `, ${item.name}`, "")
);
function truncateTitle(title) {
  const words = title.split(" ");
  if (words.length > 50) {
    const truncatedTitle = words.slice(0, 50).join(" ");
    return truncatedTitle + "...";
  }
  return title;
}
</script>
