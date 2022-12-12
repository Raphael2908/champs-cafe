<template id="test">
    <ReservationForm @modal="reservationEventHandler" :show="reservation"/>
    <!-- Abra -->
    <section class="min-h-screen flex flex-col items-center justify-start bg-abra-purple relative gap-5 pt-10 max-h-screen">
        <h1 class="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">The cafe for 
            <span class="text-yellow-400">Champions</span>
        </h1>
        <Button
        class="bg-yellow-400 text-white shadow-yellow-400/50 shadow-lg text-xl hover:shadow-yellow-300/80 hover:scale-110 active:scale-100 md:text-2xl"
        @click="reservation = true"
        >
            Make a reservation
        </Button>
        <Sprinkles class="hidden sm:block"/>
        <div class="overflow-x-hidden w-full flex justify-center items-start overflow-y-hidden">
            <!-- <img class="w-full h-5/6 object-cover object-top md:h-2/3 lg:h-4/5 lg:w-2/3" src="/landing/Abra3D.jpeg" alt=""> -->
            <img class="object-cover w-[750px] max-w-none md:w-[700px] lg:w-[1100px] object-top" src="/landing/Abra3D.jpeg" alt="">
        </div>
    </section>

    <!-- Squritle -->
    <section class="min-h-screen bg-gradient-to-b from-squirtle-blue to-squirtle-blue-darker relative px-2 overflow-hidden">
            
        <article class="flex flex-col h-full justify-center gap-10 items-center py-10">
                <h1 class="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl text-center">Fuel up for your next
                    <span class="text-yellow-400">Battle</span>
                </h1>

            <!-- Image Slideshow -->
            <div class="flex flex-col w-3/4">
                <h1 class="bg-yellow-400 shadow-lg shadow-yellow-400/50 text-white font-semibold rounded-md w-fit px-3 py-1">See all</h1>
                <div class="flex gap-5 items-start w-full overflow-x-scroll py-5 shadow-inner-carousel">
                    <Card v-for="food in menu" :key="food"
                        :image="food.image"
                        :heading="food.heading"
                        :body="food.body"
                    />
                </div>
            </div>
        </article>
        
        <img class="absolute bottom-0 h-36 md:h-56 object-contain" src="/landing/Squirtle.png" alt="">
       
    </section>

    <div class=" bg-[#1A202C]">
        <div class="container mx-auto p-6">
            <img src="https://static.pokemonpets.com/images/monsters-images-800-800/8229-Mega-Houndoom.webp" class="w-64 mx-auto mb-6" alt="Mega Houndoom">
           <h1 class="text-white font-bold text-4xl text-center pb-10">Come eat with us!</h1>
           <div class="flex flex-col text-white text-xl justify-center items-center divide-y-2">
               <div class="text-center pb-5">
                   <p class="font-bold">9am - 10pm</p>
                   <p class="font-thin">Fri Sat Sun </p>
               </div>
               <div class="text-center py-5">
                    <p class="font-bold">11am - 8pm</p>
                    <p class="font-thin">Mon Tue Wed Thu </p>
               </div>

               <div class="flex gap-3 py-5 items-center">
                    <MapPinIcon class="h-16 w-16 "/>
                    <h1>Lavender Town</h1>
               </div>
           </div>

        </div>
  </div>
</template>


<script>
import { MapPinIcon } from "@heroicons/vue/24/solid/index.js"
export default {
    setup() {
        
    },
    components:{
        MapPinIcon
    },
    props:{
        validation: {
            Type: Object,
            default: ()=> {}        
        }
    },
    data() {
        return {
            menu: [
                {
                    image: "/landing/SquirtleBlueberry.jpeg",
                    heading: "Squirtle Blueberry",
                    body: "A mix of blueberry, strawberry and walnuts with oats for a power snack"
                },
                {
                    image: "/landing/VictoryRoadBowl.jpeg",
                    heading: "Victory Road Bowl",
                    body: "Salmon and avacado made for our toughest trainers"
                },
            ],
            reservation: false
        }
    },
    methods:{
        reservationEventHandler(target){
            if(target.id == "backdrop_container"){
                this.reservation = false
            }
        }
    }
}
</script>