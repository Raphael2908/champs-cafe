<template>
    <section
    id="backdrop_container"
    class="mx-auto w-full h-full bg-opacity-50 flex flex-col items-center justify-center bg-black fixed top-0 z-10" 
    @click="$emit('modal', $event.target)"
    :class="[show ? 'block' : 'hidden']"
    >

        <form @submit.prevent="submit" method="post" class="bg-stone-100 rounded-lg flex flex-col items-center justify-center z-20 md:w-1/2 px-12 py-16">

            <div class="flex flex-col justify-center gap-5 h-fit w-full">
                <h1 class="text-lg font-bold text-center md:text-xl lg:text-3xl">Enter your reservation details</h1>
                <div>
                    <label for="" class="block text-red-500 text-xs mb-2" v-if="errorBag.name">{{ errorBag.name }}</label>
                    <input v-model="name" class="px-2 py-3 rounded-md outline active:outline-pokemon-blue w-full" type="text" placeholder="Name">
                </div>
                <div>
                    <label for="" class="block text-red-500 text-xs mb-2" v-if="errorBag.email">{{ errorBag.email }}</label>
                    <input v-model="email" class="px-2 py-3 rounded-md outline active:outline-pokemon-blue w-full" type="text" placeholder="Email">
                </div>
                <div>
                    <label for="" class="block text-red-500 text-xs mb-2" v-if="errorBag.phone_num">{{ errorBag.phone_num }}</label>
                    <input v-model.number="phone_num" class="px-2 py-3 rounded-md outline active:outline-pokemon-blue w-full" type="tel" placeholder="Phone Number">
                </div>
                <div>
                    <label for="" class="block text-red-500 text-xs mb-2" v-if="errorBag.date_booked">{{ errorBag.date_booked }}</label>
                    <input v-model="date_booked" class="px-2 py-3 rounded-md outline active:outline-pokemon-blue w-full" type="datetime-local" placeholder="date and time">
                </div>

                <button
                class="shadow-lg font-semibold rounded-md px-2 py-2 md:text-xl lg:text-3xl lg:py-3 lg:px-6 lg:rounded-lg h-fit bg-yellow-400 shadow-yellow-400/50 text-white">
                Submit
                </button>
            </div>

        </form>
    </section>
</template>

<style scoped>
.bounce2 {
  animation: bounce2 0.5s ease;
  transform: scale(100%); 
}
@keyframes bounce2 {
	0% {
        transform: scale(50%); 
    } 

    50%{
        transform: scale(100%); 
    }

    75%{
        transform: scale(98%); 
    }

    100%{
        transform: scale(100%); 
    }
}
</style>

<script>
import Swal from 'sweetalert2'
export default {
    setup() {
        
    },
    props:{
        show: false,
    },
    data(){
        return {
            name: null,
            email: null,
            phone_num: null,
            date_booked: null,
            errorBag: {}
        }
    },
    methods:{
        async submit(){
            await useFetch('api/reservation/create',{
                method:'POST',
                body:{
                    name: this.name,
                    email: this.email,
                    phone_num: this.phone_num,
                    date_booked: this.date_booked
                }
            }).then((res) => {
                // Handles form validation in the backend
                if(res.data.value.errorBag){
                    this.errorBag = res.data.value.errorBag
                }
                // Sends a toast if the status is success
                if(res.data.value.status == 'success' ){
                    this.errorBag = {}
                    Swal.fire({
                        text: res.data.value.message,
                        toast: true,
                        position: 'top',
                        icon: res.data.value.status,
                    })
                }
            }).catch( (error) => {
                Swal.fire({
                    titleText: "Error",
                    text: error,
                    toast: true,
                    position: 'top',
                    icon: 'error',
                })
            })
        }
    }
}
</script>