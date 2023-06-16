<template>
    <transition name="upcoming" mode="out-in">
        <div class="main__upcoming">
            <UpcomingItem v-for="(movie, idx) in getUpcomingArr" :key="movie.id" :movie="movie" :idx="idx"
                :next="getUpcomingArr[idx + 1 == getUpcomingArr.length ? 0 : idx + 1]" @slideNext="slideNext"
                :slideView="slideView" />
        </div>
    </transition>
</template>

<script setup>
import { useUpcoming } from '@/stores/Upcoming';
import { onMounted, ref, computed } from "vue";
import UpcomingItem from './UpcomingItem.vue';

let upcomingStore = useUpcoming()
const getUpcomingArr = computed(() => upcomingStore.upcoming)

let slideView = ref(0)
let timeOut = ref(null)

let slide = () => {
    if (getUpcomingArr.value.length - 1 == slideView.value) slideView.value = 0
    else slideView.value++
    timeOut = setTimeout(slide, 5000);
}


const slideNext = () => {
    clearTimeout(timeOut)
    slide()
}

onMounted(() => {
    upcomingStore.getUpcoming()
    timeOut = setTimeout(slide, 5000);

})
</script>

<style lang="scss" scoped></style>