<template>
    <button :type="type" :class="`${ color } ${ textColor } shadow-lg ${ shadowColor } font-semibold rounded-md w-fit px-3 py-1 md:text-xl lg:text-3xl lg:py-3 lg:px-6 lg:rounded-lg h-fit`">
        <slot/>
    </button>
</template>

<script>
export default {
    setup() {
        
    },
    props:{
        color:{
            Type: Object,
            default: () => {}
        },
        textColor:{
            Type: Object,
            default: () => {}
        },
        shadowColor:{
            Type: Object,
            default: () => {}
        },
        type:{
            Type: Object,
            default: () => {}
        }
    }
}
</script>