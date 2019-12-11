<template>
    <div class="special-title--container">
        <span class="special-title">
            <slot></slot>
        </span>
        <span class="special-subtitle">
            {{ subtitle }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "ChartTitle",
        props: {
            subtitle: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .special-title--container {
        width: 100%;
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
    }

    .special-title {
        color: white;
        font-size: 30px;
        margin-left: 20px;
    }
    .special-title::before {
        content: '..';
        background: #04f4fb;
        color: #04f4fb;
        margin-right: 20px;
    }
    .special-subtitle {
        color: gray;
        font-size: 25px;
    }
</style>
