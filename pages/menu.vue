<template>
    <section class="min-h-screen w-full">
        <div class="relative container mx-auto px-4">
            <div class="flex items-center gap-2">
                <h1 class="text-2xl font-bold text-gray-800">Menu</h1>
                <button @click="expandedView = !expandedView">
                    <ArrowsPointingOutIcon v-if="!expandedView" class="h-7 w-7" />
                    <ArrowsPointingInIcon v-else class="h-7 w-7" />
                </button>
            </div>
            <div>
                <ul class="flex gap-5 overflow-x-scroll text-white py-2">
                    <li 
                    class="hover:cursor-pointer bg-gray-800 shadow-md px-3 py-1 rounded-md" 
                    @click="category = 'all'">
                        All
                    </li>
                    <li 
                    class="hover:cursor-pointer bg-gray-800 shadow-md px-3 py-1 rounded-md" 
                    @click="category = 'desert'">
                        Deserts
                    </li>
                    <li 
                    class="hover:cursor-pointer bg-gray-800 shadow-md px-3 py-1 rounded-md" 
                    @click="category = 'main'">
                        Mains
                    </li>
                    <li 
                    class="hover:cursor-pointer bg-gray-800 shadow-md px-3 py-1 rounded-md" 
                    @click="category = 'drink'">
                        Drinks
                    </li>
                </ul>
            </div>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-5 py-5">
                        <Card class=""
                        v-for="food in filter" :key="food.id"
                            :image="food.image"
                            :heading="food.heading"
                            :body="food.body"
                            :element="food.element"
                            :hp="food.hp"
                            :cost="food.cost"
                            :calories="food.calories"
                            :size="food.size"
                            :warning="food.warning"
                        />
                </div>
        </div>
    </section>
</template>

<script>
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/vue/24/solid/index'
export default {
    async setup() {
       const menu = await useFetch('/api/menu/getMenu')

        return {
            menu: menu.data.value
        } 
    },
    components: {
        ArrowsPointingOutIcon,
        ArrowsPointingInIcon
    },
    data(){
        return {
            expandedView: true,
            category: 'all'
        }
    },
    onMounted(){
        document.getElementById('1').style('top: -10px')
    },
    computed: {
        filter() {
            if(this.category == 'all'){
                return this.menu
            }
            else if (this.category == 'desert'){
                return this.menu.filter((e) => {
                    if(e.category == this.category){
                        return e
                    }
                })
            }
            else if (this.category == 'main'){
                return this.menu.filter((e) => {
                    if(e.category == this.category){
                        return e
                    }
                })
            }
            
        },
    }
}
</script>