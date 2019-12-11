<template>
    <div class="container">
        <div class="container--wrapper">
            <div class="left-nav"></div>
            <div class="main--content">
                <slot name="main"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>

</style>
