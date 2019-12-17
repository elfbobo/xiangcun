<template>
        <li class="el-select-dropdown__item" @click.stop="selectOptionClick">
            <slot>
                <span>{{ currentLabel }}</span>
            </slot>
        </li>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        inject:['select'],
        props: {
            value: {
                type: Number,
                required: true,
            },
            visbale:{
                type: Boolean,
                default:true
            },
            label: [String, Number],
        },
        created() {
            this.select.cachedOptions.push(this);
        },
        computed: {
            currentLabel() {
                return this.label || (this.isObject ? '' : this.value);
            },
            currentValue() {
                return this.value;
            },
        },
        methods: {
            selectOptionClick(){
                if (this.disabled !== true && this.groupDisabled !== true) {
                    this.dispatch('ElSelect', 'handleOptionClick', this);
                }
            },
            dispatch(componentName, eventName, params) {
                
                var parent = this.$parent || this.$root;
                var tags=parent.$options._parentVnode.tag.split('-')
                var name = tags[tags.length-1]
                
                while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
        
                if (parent) {
                    tags=parent.$options._parentVnode.tag.split('-')
                    name = tags[tags.length-1]
                }
                }
                if (parent) {
                    parent.$emit.apply(parent, [eventName].concat(params));
                }
            },
            broadcast(componentName, eventName, params) {
                broadcast.call(this, componentName, eventName, params);
            }
        }
    }
    function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
      var name = child.$options.componentName;
        
      if (name === componentName) {
        child.$emit.apply(child, [eventName].concat(params));
      } else {
        broadcast.apply(child, [componentName, eventName].concat([params]));
      }
    });
  }
</script>

<style scoped>

</style>