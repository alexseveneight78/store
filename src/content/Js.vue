<template>
    <div>
        <h3>JS component</h3>
        <p>
            route.params {{ $route.params.id }}
        </p>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        background-color: #F0DB4F;
        color: #323330;
        width: 100%;
        //padding: 25px 50px 0 25px;
    }
</style>
