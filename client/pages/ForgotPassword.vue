<template>
    <div class="container my-16 w-full mx-auto">
        <div class="max-w-sm mx-auto">
            <h2 class="text-center text-gold">Forgot Password</h2>

            <div class="w-full bg-white shadow-md mt-5 rounded-sm p-12">
                <text-input
                    name="email"
                    :value="model.email"
                    v-model="model.email"
                    v-validate="'required|email'"
                    placeholder="Enter your email"
                    :error="errors.first('email')"
                />
                <btn
                    label="Send Password Reset Link"
                    :disabled="loading"
                    :loading="loading"
                    @click="forgotPassword"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import formMixin from '@client/mixins/form'
    import { POST_FORGOT_PASSWORD } from '@store/auth/actions'

    export default {
        mixins: [formMixin],
        data: () => ({
            model: {
                email: ''
            }
        }),

        methods: {
            forgotPassword() {
                this.$validator.validate().then(isValid => {
                    if (! isValid) {
                        return
                    }

                    this.toggleLoading()

                    this.$store.dispatch(POST_FORGOT_PASSWORD, this.model)
                        .then(response => {
                            this.toggleLoading()

                            this.flash('Password reset link sent. It expires in 5 minutes')

                            this.$router.push('/')
                        })
                        .catch(error => {
                            this.toggleLoading()

                            // error.response.data => { email: 'This user already exists' }
                            // => ['email']
                            // this.errors.add({ field: 'email', msg: 'This user already exists' })
                            Object.keys(error.response.data).forEach(field => {
                                this.errors.add({
                                    field,
                                    msg: error.response.data[field]
                                })
                            })
                        })
                })
            }
        }
    }
</script>
