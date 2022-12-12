<template>
    <!-- <div class="max-h-96 min-h-full rounded-md text-stone-700 max-w-64 w-72 min-w-min bg-white px-2 py-3 shadow-lg">
        <img class="object-cover rounded-md w-72 min-h-24 h-48" :src="image" alt="">
        <h1 class="font-semibold py-1 md:text-2xl lg:text-3xl">{{ heading }}</h1>
        <p class="text-xs md:text-lg lg:text-xl w-72">{{ body }}</p>
    </div> -->

    <div class="max-w-sm min-w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-72 w-1/2 md:min-w-min md:max-h-full md:min-h-full">
        <a href="#">
            <img class="rounded-t-lg object-cover w-full min-h-24 h-48" :src="image" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-sm md:text-2xl font-bold tracking-tight text-gray-800">{{ heading }}</h5>
            </a>
            <p class="mb-3 text-xs md:text-base font-normal text-gray-700 dark:text-gray-400">{{ body }}</p>
        </div>
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