<template>
    <div>
        <h1>Home page</h1>
    </div>
</template>

<script>
import Menu from './menu/Menu.vue';
export default {
    components: {
        'app-menu': Menu
    }
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: nowrap;
        border: 1px dashed red;
        width: 100%;
    }
</style>
