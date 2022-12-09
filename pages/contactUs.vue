<template>
    <section class="container mx-auto w-full px-4">
        <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-800">Contact Us</h1>
            <img class="h-16" src="contact_us/ROtom.png" alt="" srcset="">
        </div>
        <form @submit.prevent="messageReinhardt" method="post">
        <div class="flex flex-col gap-2">
          <div>
            <label class="text-gray-800" for="">Name</label>
            <p v-if="errorBag.name" class="text-red-500" for="">Please enter your name</p>
            <input v-model="form.name" class="border border-orange-300 text-gray-800 text-sm rounded-lg focus:border-orange-500 outline-orange-500 block w-full p-2.5" type="text">
          </div>

          <div>
            <label class="text-gray-800" for="">Email</label>
            <p v-if="errorBag.email" class="text-red-500" for="">Please enter a valid email</p>
            <input v-model="form.email" class="border border-orange-300 text-gray-800 text-sm rounded-lg focus:border-orange-500 outline-orange-500 block w-full p-2.5" type="text">
          </div>

          <div>
            <label class="text-gray-800" for="">Phone Number</label>
            <input v-model="form.phone_number" class="border border-orange-300 text-gray-800 text-sm rounded-lg focus:border-orange-500 outline-orange-500 block w-full p-2.5" type="text">
          </div>

          <div>
            <label class="text-gray-800" for="">Message</label>
            <p v-if="errorBag.message" class="text-red-500" for="">Please send me a message :P</p>
            <textarea v-model="form.message" class="border border-orange-300 text-gray-800 text-sm rounded-lg focus:border-orange-500 outline-orange-500 block w-full p-2.5 md:h-64"/>
          </div>
        </div>

        <button class="w-full mt-5 bg-orange-500 px-4 py-2 rounded-xl text-white text-xl font-semibold shadow-lg hover:bg-orange-800 duration-200 active:scale-90">Submit</button>
        </form>
    </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    setup() {
        
    },

    data(){
        return {
            form: {
                name: '',
                email: '',
                phone_number: '',
                message: ''
            },
            errorBag: {
                type: Object,
                default: {
                    name: '',
                    email: '',
                    message: ''
                }
            }
        }
    },

    methods:{
        async messageReinhardt() {  
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: 'green',
                customClass: {
                popup: 'colored-toast'
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })

            let res = await useFetch('/api/reinhardt', {
                method: 'POST',
                body: this.form
            })
            console.log(res.data.value)
            if(res.data.value == 'success'){
                this.errorBag = {}
                await Toast.fire({
                icon: 'success',
                title: 'Message Delivered'
                })
            }

            if(res.data.value != 'success'){
                this.errorBag.name = res.data.value.name
                this.errorBag.email = res.data.value.email
                this.errorBag.message = res.data.value.message
            }
        },
    }
}
</script>