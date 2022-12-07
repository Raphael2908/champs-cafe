<template>
    <section class="flex w-full justify-between items-center container mx-auto py-5 flex-wrap px-4">

        <NuxtLink to="/">
            <h1 class="text-xl font-extrabold">Champs Cafe</h1>
        </NuxtLink>
        <ul class="flex gap-5 items-center">
            <li>
                <h1>About</h1>
            </li>
            <li>
                <h1>Menu</h1>
            </li>
            <li>
                <h1>Contact Us</h1>
            </li>
            <li>
                <NuxtLink to="/reservations">
                    <Button class="bg-yellow-400 text-white shadow-yellow-400/50 shadow-lg">Your reservations</Button>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>
