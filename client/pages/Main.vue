<template>
    <div>
        <div class="h-2 w-full bg-gold-light"></div>
        <div class="py-5 mx-10 flex justify-between items-center">
            <router-link to="/" class="no-underline text-gold">Mevn</router-link>
            <div>
                <router-link class="no-underline text-brown" to="/auth/login">Sign In</router-link>
                <router-link class="no-underline text-brown border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest rounded-full border-brown ml-3"  to="/auth/register">Join Now</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
