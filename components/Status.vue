<template>
    <div>
        <div v-if="status == true">
             <h1 class="rounded-full bg-emerald-300 flex items-center text-emerald-900 justify-between px-3 py-1 w-fit gap-2 opacity-90 text-sm whitespace-nowrap"> 
                <div class="rounded-full h-3 w-3 bg-emerald-500"></div> 
                {{ trueMessage }}
            </h1>
        </div>
        <div v-if="status == false">
            <h1 class="rounded-full bg-pink-300 flex items-center text-pink-900 justify-between px-3 py-1 w-fit gap-2 opacity-90 text-sm whitespace-nowrap"> 
                <div class="rounded-full h-3 w-3 bg-pink-500"></div> 
                {{ falseMessage }}
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    props:{
        status: {
            Type: Boolean
        },
        trueMessage:{
            Type: String
        },
        falseMessage:{
            Type: String
        }
    }
}
</script>