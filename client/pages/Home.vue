<template>
    <div class="my-32">
        <h1 class="text-center text-brown" v-if="!auth">
            Mevn Auth
        </h1>
        <h1 class="text-center text-brown" v-else>
            Welcome, {{ user.name }}
        </h1>
    </div>
</template>
