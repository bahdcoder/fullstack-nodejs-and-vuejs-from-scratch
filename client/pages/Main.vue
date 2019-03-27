<template>
    <div>
        <flash />
        <div class="w-full h-12 text-brown bg-gold-lightest flex items-center justify-center" v-if="auth && !confirmed">
            Please confirm your email address. Didn't receive an email? <span @click="resendEmailConfirm" class="cursor-pointer ml-2 border-b-2 border-brown hover:text-brown-darkest">Click here to resend email.</span>
        </div>
        <div class="h-2 w-full bg-gold-light"></div>
        <div class="py-5 mx-10 flex justify-between items-center">
            <router-link to="/" class="no-underline text-gold">Mevn</router-link>
            <div v-if="!auth">
                <router-link class="no-underline text-brown" to="/auth/login">Sign In</router-link>
                <router-link class="no-underline text-brown border-2 px-3 py-2 hover:text-brown-darkest hover:border-brown-darkest rounded-full border-brown ml-3"  to="/auth/register">Join Now</router-link>
            </div>
            <div v-else>
                <span class="cursor-pointer text-brown hover:text-brown-darkest" @click="unsetAuth">Logout</span>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Flash from '@components/Flash.vue'

    export default {
        components: {
            Flash
        }
    }
</script>
