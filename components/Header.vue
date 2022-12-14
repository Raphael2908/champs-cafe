<template>
    <section class="sticky top-0 z-10 bg-white bg-opacity-50 backdrop-blur-lg">
        <div class="flex w-full justify-between items-center container mx-auto py-2 flex-wrap px-4 ">
    
            <NuxtLink to="/">
                <h1 class="text-xl font-extrabold text-gray-800">Champs Cafe</h1>
            </NuxtLink>
             <button @click="navItems = !navItems" class="md:hidden">
                <Bars3Icon class="h-8 w-8 rounded-md hover:cursor-pointer"/>
            </button>
    
            <!-- Nav Items Small -->
            <ul v-show="navItems" class="md:hidden z-10 absolute flex flex-col gap-5 items-center inset-x-0 -bottom-52 bg-white rounded-md mx-5 py-2 shadow-lg border-grey-400 border md:static md:flex-row md:shadow-none md:bg-transparent md:border-0"
            @click="navItems = !navItems">
                 <li>
                    <NuxtLink to="/menu">
                        <Button class="bg-sky-400 text-white shadow-sky-400/50 shadow-lg">Menu</Button>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contactUs">
                        <Button class="bg-orange-400 text-white shadow-orange-400/50 shadow-lg">Contact Us</Button>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/reservations">
                        <Button class="bg-yellow-400 text-white shadow-yellow-400/50 shadow-lg">Your reservations</Button>
                    </NuxtLink>
                </li>
            </ul>
    
             <!-- Nav Items Big -->
            <ul class="hidden md:flex gap-5 items-center">
                <li>
                    <NuxtLink to="/menu">
                        <Button class="bg-sky-400 text-white shadow-sky-400/50 shadow-lg">Menu</Button>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contactUs">
                        <Button class="bg-orange-400 text-white shadow-orange-400/50 shadow-lg">Contact Us</Button>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/reservations">
                        <Button class="bg-yellow-400 text-white shadow-yellow-400/50 shadow-lg">Your reservations</Button>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>

</style>

<script>
import { Bars3Icon } from "@heroicons/vue/24/solid/index.js"
export default {
    setup() {
        
    },
    components: {
        Bars3Icon
    },
    data(){
        return {
            navItems: false
        }
    }
}
</script>
