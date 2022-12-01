<template>
    <div :class="`${color} rounded-full text-${textColor} py-1 px-4 absolute w-fit h-fit md:text-xl lg:text-2xl xl:text-4xl`">
        <h1>{{ text }}</h1>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    props:{
        text:{
            Type: Object,
            default: () => {}
        },
        color:{
            Type: Object,
            default: () => {}
        },
        textColor:{
            Type: Object,
            default: () => {}
        },
    }
}
</script>