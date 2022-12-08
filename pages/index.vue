<template id="test">
    <ReservationForm @modal="reservationEventHandler" :show="reservation"/>
    <!-- Abra -->
    <section class="h-screen flex flex-col items-center justify-end bg-abra-purple relative gap-5 pt-10">
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
        <img class="w-full h-5/6 object-cover object-top md:h-2/3 lg:h-4/5 lg:w-2/3" src="/landing/Abra3D.jpeg" alt="">
    </section>

    <!-- Squritle -->
    <section class="h-screen max-h-screen bg-gradient-to-b from-squirtle-blue to-squirtle-blue-darker relative px-2 overflow-hidden">
            
        <article class="flex flex-col h-full justify-center gap-10 items-center">
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

      <div class="min-h-screen bg-[#1A202C]">
    <div class="container mx-auto p-6">
      <img src="https://static.pokemonpets.com/images/monsters-images-800-800/8229-Mega-Houndoom.webp" class="w-64 mx-auto mb-6" alt="Mega Houndoom">
      <h1 class="text-3xl font-bold text-center text-white mb-6">Welcome to the Pokemon Cafe!</h1>
      <p class="text-white text-center mb-6">
        We are a new pokemon theme cafe that serves delicious coffee and amazing breakfast meals. Come visit us and see for yourself!
      </p>
      <div class="flex justify-center">
        <a href="#" class="px-3 py-2 rounded-md bg-yellow-400 text-white hover:bg-yellow-500">Visit Us</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    setup() {
        
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
                }
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