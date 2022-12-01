<template>
    <div class="max-h-96 min-h-full rounded-md text-stone-700 max-w-64 w-72 min-w-min bg-white px-2 py-3 shadow-lg">
        <img class="object-cover rounded-md w-72 min-h-24 h-48" :src="image" alt="">
        <h1 class="font-semibold py-1 md:text-2xl lg:text-3xl">{{ heading }}</h1>
        <p class="text-xs md:text-lg lg:text-xl w-72">{{ body }}</p>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    props:{
        image:{
            Type:Object,
            default: () => {}
        },
        heading:{
            Type:Object,
            default: () => {}
        },
        body:{
            Type:Object,
            default: () => {}
        }
    }
}
</script>