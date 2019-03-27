<template>
    <h1 class="text-center my-16 text-brown">
        Confirming email ...
    </h1>
</template>

<script>
    import { POST_CONFIRM_EMAIL } from '@store/auth/actions'

    export default {
        mounted() {
            this.$store.dispatch(POST_CONFIRM_EMAIL, {
                token: this.$route.params.token
            }).then(response => {
                this.flash('Email confirmed.')
                this.setAuth(response.data)
            }).catch(() => {
                this.flash('Error confirming email.', 'error')
                this.$router.push('/')
            })
        }
    }
</script>
