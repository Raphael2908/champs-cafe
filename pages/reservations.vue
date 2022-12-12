<template>
    <section class="container mx-auto w-full px-4">
        <div class="flex gap-5 pb-5 items-center flex-wrap">
            <h1 class="text-2xl font-bold text-gray-800 ">Your reservations</h1>
            <Button 
            v-if="reservations" 
            @click="inputNumber" 
            class="bg-yellow-400 text-white shadow-yellow-400/50 shadow-lg">
            Find your reservation
            </Button>
        </div>
        <div v-if="reservations" class="w-full text-left border rounded-md border-collapse overflow-x-scroll shadow-md">
            <table class="w-full">
                <thead class="text-white bg-gray-600">
                    <tr>
                        <th class="px-6 py-3 hover:cursor-pointer" @click="sort('name')">
                            Name
                            <span v-if="col=='name' && asc==false">👇</span>
                            <span v-if="col=='name' && asc==true">👆</span>
                        </th>
                        <th class="px-6 py-3 hover:cursor-pointer" @click="sort('date_booked')">
                            Time
                            <span v-if="col=='date_booked' && asc==false">👇</span>
                            <span v-if="col=='date_booked' && asc==true">👆</span>
                        </th>
                        <th class="px-6 py-3 hover:cursor-pointer" @click="sort('confirmed')">
                            Status
                            <span v-if="col=='confirmed' && asc==false">👇</span>
                            <span v-if="col=='confirmed' && asc==true">👆</span>
                        </th>
                     </tr>
                </thead>
                <tbody v-if="reservations">
                    <tr
                    v-for="reservation in reservations" :key="reservation">
                        <td class="px-6 py-3">{{ reservation.name }}</td>
                        <td class="px-6 py-3 whitespace-nowrap">{{ reservation.date_booked }}</td>
                        <td class="px-6 py-3">
                            <Status
                            :status="reservation.confirmed"
                            trueMessage="Confirmed"
                            falseMessage="Pending Confirmation"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else class="flex items-center justify-end md:justify-center">
            <div class="relative">
                <img class="h-64 md:h-72" src="/reservation/pickachu_point.jpeg" alt="">
                <Button
                @click="inputNumber"
                class="bg-yellow-400 text-white shadow-yellow-400/50 shadow-lg absolute right-36 top-20 md:right-44 sm:whitespace-nowrap">
                Find your reservation
                </Button>
            </div>
            
        </div>

    </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    setup() {
        
    },
    data(){
        return {
            reservations: null,
            phoneNumber: null,
            asc: false,
            col: null,
        }
    },

    methods:{
        sort(column){
            if(this.col == null || this.col != column){
                this.col = column
                this.asc = false
            }

            if(this.col == column){
                this.asc = !this.asc
            }
            
            return useFetch(`api/reservation/getReservation?phone_num=${this.phoneNumber}&col=${this.col}&asc=${this.asc}`)
            .then( (res) => {
                console.log(this.col, this.asc)
                this.reservations = res.data
                return res
            })
        },

        inputNumber(){
            Swal.fire({
            title: 'Please enter your phone no.',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            cancelButtonText: 'Book a reservation',
            showLoaderOnConfirm: true,
            preConfirm: (element) => {
                this.phoneNumber = element

                return useFetch(`api/reservation/getReservation?phone_num=${element}`)
                .then((response) => {
                    if(response.data.value == 'Please enter a phone number'){
                        throw createError(response.data.value)
                    }

                    else if(response.data.value.length == 0){
                        Swal.showValidationMessage('There is no reservation under this number :(')
                    }

                    this.reservations = response.data
                    return response
                }).catch((error) => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                    return error
                })
            },
            allowOutsideClick: true,
            }).then((event) => {
                if (event.dismiss == Swal.DismissReason.cancel){
                    navigateTo('/')
                }
            })
        }
    }
}
</script>