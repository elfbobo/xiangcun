<template>
    <div class="el-select">
        <div class="el-input el-input--suffix" @click.stop="toggleMenu">
            <input class="el-input__inner" type="text" disabled="disabled" placeholder="" v-model="currentValue"/>
        </div>
        <ul class="el-select-dropdown el-popper" v-show="visbale">
            <slot></slot>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'ElSelect',
        data() {
            return {
                currentValue: '',
                visbale: false,
                cachedOptions: []
            }
        },
        props: {
            value: { // 必须要使用value
                type: [String,Number],
                default: '',
            },
        },
        provide() {
            return {
                'select': this
            };
        },
        created() {
            this.$on('handleOptionClick', this.handleOptionSelect);
        },
        mounted() {
            this.$nextTick(() => {
                this.setOptionLabel();
                var _this = this
                document.addEventListener('click', function () {
                    _this.visbale = false;
                })
            })
        },
        directives: {},
        methods: {
            init(val) {
                this.currentValue = val
            },
            toggleMenu() {
                this.visbale = !this.visbale;
            },
            handleClose() {
                this.visbale = false;
            },
            setOptionLabel() {
                var flag = false;
                for (var i = 0, j = this.cachedOptions.length; i < j; i++) {
                    if (this.cachedOptions[i].value == this.value) {
                        flag = true;
                        this.currentValue = this.cachedOptions[i].label;
                        break;
                    }
                }
                if (!flag) {
                    this.currentValue = this.value;
                }
            },
            handleOptionSelect(option) {
                this.currentValue = option.label;
                this.visbale = false;
                this.$emit('change', option.value);
                this.$emit('input', option.value);
            }
        }
    }
</script>

<style scoped>

</style>
