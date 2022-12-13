<template>
    <div class="h-[400px] w-[248px] bg-white min-w-[248px] rounded-md border-8 border-yellow-400 px-2 py-1 flex flex-col md:h-[500px] md:min-w-[310px] shadow-lg" 
    :class="typeInfo.element">
        <div class="flex justify-between items-end whitespace-nowrap">
            <h1 class="font-bold text-sm md:text-lg">{{ heading }}</h1>
            <h1 class="font-semibold text-xs md:text-lg text-red-500">{{ hp }} HP</h1>
        </div>
        <div class="h-1/2 overflow-clip border-4 border-yellow-500 shadow-lg rounded-sm relative">
            <img class="object-cover min-h-full" :src="image" alt="">
        </div>

        <!-- Card body -->
        <section class="flex flex-col divide-y divide-black h-1/2">
            <div class="text-left py-2 grid grid-cols-3 items-center justify-items-center">
                <img class="h-6 w-6 justify-self-start" :src="typeInfo.elementImage" alt="">
                <h1 class="font-bold">Cost</h1>
                <h1 class="text-xl justify-self-end">{{ cost }}</h1>
            </div>

            <p class="text-[12px] md:text-base py-2 px-4">{{ body }}</p>

            <div class="grid py-2 grid-cols-3">
                <div class="text-center">
                    <h1 class="text-[10px] md:text-[14px] font-bold">Warning</h1>
                    <p class="text-[8px] md:text-[12px]">{{ warning }}</p>
                </div>
                <div class="text-center">
                    <h1 class="text-[10px] md:text-[14px] font-bold">Calories</h1>
                    <p class="text-[8px] md:text-[12px]">{{ calories }}</p>
                </div>
                <div class="text-center">
                    <h1 class="text-[10px] md:text-[14px] font-bold">Size</h1>
                    <p class="text-[8px] md:text-[12px]">{{ size }}</p>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    setup() {
        
    },
    props:{
        image:{
            Type: String,
        },
        heading:{
            Type: String,
        },
        body:{
            Type: String,
        },
        element:{
            Type: String,
        },
        hp:{
            Type: Number,
            default: 0
        },
        cost:{
            Type: Number,
            default: 0
        },
        warning:{
            Type: String,
            default: ''
        },
        calories:{
            Type: Number,
            default: 0
        },
        size:{
            Type: String,
            default: ''
        }
    },
    computed:{
        typeInfo(){
            if(this.element == 'water'){
                return {
                    element: 'water',
                    elementImage: '/elementTypes/waterElement.png'
                }
            }
            if(this.element == 'grass'){
                return {
                    element: 'grass',
                    elementImage: '/elementTypes/grassElement.png'
                }
            }
            if(this.element == 'fighting'){
                return {
                    element: 'fighting',
                    elementImage: '/elementTypes/fightingElement.png'
                }
            }
            if(this.element == 'fire'){
                return {
                    element: 'fire',
                    elementImage: '/elementTypes/fireElement.png'
                }
            }
            if(this.element == 'psychic'){
                return {
                    element: 'psychic',
                    elementImage: '/elementTypes/psychicElement.png'
                }
            }
        }
    }
}
</script>

<style scoped>
.normal {
    background-color: #A8A77A;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.fire {
    background-color: #EE8130;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.water {
    background-color: #6390F0;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.electric{
    background-color: #F7D02C;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.grass {
    background-color: #7AC74C;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.ice {
    background-color: #96D9D6;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.fighting {
    background-color: #C22E28;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.poison {
    background-color: #A33EA1;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.ground {
    background-color: #E2BF65;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.flying {
    background-color: #A98FF3;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.psychic {
    background-color: #F95587;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.bug{
    background-color: #A6B91A;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.rock {
    background-color: #B6A136;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.ghost {
    background-color: #735797;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.dragon {
    background-color: #6F35FC;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.dark {
    background-color: #705746;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.steel{
    background-color: #B7B7CE;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
.fairy{
    background-color: #D685AD;
    background-image: radial-gradient(white, transparent);  
    background-repeat: repeat-y;
}
</style>