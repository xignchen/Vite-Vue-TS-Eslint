<script setup lang="ts">

import {computed, ref} from 'vue';
import store from '../../store';

const text = ref(computed(() => {
    return store.state.userInfo.username
}));
</script>

<template>
    <!--  水印-->
    <div class="copyRightBox">
        <div class="font" ref="sy" v-for="(item,index) in 50" :key='index'>
            {{ text }}
        </div>
    </div>
</template>

<style scoped>
.copyRightBox {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.font {
    width: 20%;
    height: 20%;
    text-align: center;
    transform: rotate(-30deg);
    font-size: 1.05rem;
    color: rgba(192, 196, 204, 0.15);
}
</style>
