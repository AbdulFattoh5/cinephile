<template>
  <section class="main__video">
    <router-link :to="`${props.type}/`" class="main__video-title">
      <span>{{ props.type == "movie" ? "Фильмы" : "Сереалы" }}</span>
      <img src="@/assets/images/arrow.png" alt="" />
    </router-link>
    <Swiper :modules="modules" :space-between="25" :navigation="true" :breakpoints="swiperOption.breakpoints">
      <SwiperSlide class="main__video-item" v-for="(item, index) in content" @click="getItem(item)">
        <img v-lazy="imgUrlFull + item.poster_path" class="main__video-item-img" src="@/assets/images/card.png"
          alt="" />
        <router-link :to="`${props.type}/`" class="main__video-item-link" />
        <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
      </SwiperSlide>
      <SwiperSlide>
        <router-link :to="`${props.type}/`" class="main__video-item">
          {{ props.type == "movie" ? "Все фильмы" : "Все сереалы" }}
        </router-link>
      </SwiperSlide>
    </Swiper>
    <InfoBlock :current="current" @close="close" :type="type" :open="open" />
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { usePopular } from "@/stores/popular";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { imgUrlFull } from "@/static";
import "swiper/scss";
import "swiper/scss/navigation";
import InfoBlock from "../InfoBlock/InfoBlock.vue";
import { useItemId } from '@/stores/itemId'
const props = defineProps(["type"]);
const popular = usePopular();
let modules = ref([Navigation]);

const content = computed(() =>
  props.type == "movie" ? popular.popularMovies : popular.popularTvs
);
let swiperOption = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1420: {
      slidesPerView: 5,
    },
  },
});
let current = ref(null)
let open = ref(false)
const itemIdStore = useItemId()
const getItem = async item => {
  current.value = null
  await itemIdStore.getItemId({ type: props.type, id: item.id })
  current.value = props.type == 'movie' ? itemIdStore.movie : props.type == 'tv' ? itemIdStore.tv : ''
  open.value = true
}

const close = () => {
  open.value = false
}
onMounted(() => {
  popular.getPopular({ type: props.type });
});
</script>
