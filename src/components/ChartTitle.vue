<template>
    <div class="special-title--container">
        <span class="special-title">
            <slot></slot>
        </span>
        <span class="special-subtitle">
            {{ subtitle }}
        </span>
        <div class="special-actions">
            <slot name="actions">
            </slot>
        </div>
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
        flex: 0 1 auto;
        display: flex;
        line-height: 1;
    }

    .special-title--container, .special-title--container * {
        box-sizing: border-box;
    }
    .special-actions {
        margin-left: auto;
    }
    .special-title {
        color: white;
        font-size: 0.7vw;
        margin-left: 0.4vw;

    }
    .special-title::before {
        content: '..';
        background: #04f4fb;
        color: #04f4fb;
        margin-right: 0.4vw;

    }
    .special-subtitle {
        color: gray;
        font-size: 0.5vw;

    }
</style>
