<template>
    <div class="container my-16 w-full mx-auto">
        <div class="max-w-sm mx-auto">
            <h2 class="text-center text-gold">Reset Your Password</h2>

            <div class="w-full bg-white shadow-md mt-5 rounded-sm p-12">
                <text-input
                    type="password"
                    name="password"
                    :value="model.password"
                    v-model="model.password"
                    v-validate="'required|min:6'"
                    :error="errors.first('password')"
                    placeholder="Enter your new password"
                />
                <btn
                    label="Reset Password"
                    :disabled="loading"
                    :loading="loading"
                    @click="resetPassword"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import formMixin from '@client/mixins/form'
    import { POST_RESET_PASSWORD } from '@store/auth/actions'

    export default {
        mixins: [formMixin],
        data: () => ({
            model: {
                password: ''
            }
        }),

        methods: {
            resetPassword() {
                this.$validator.validate().then(isValid => {
                    if (! isValid) {
                        return
                    }

                    this.toggleLoading()

                    this.$store.dispatch(POST_RESET_PASSWORD, {
                        ...this.model,
                        token: this.$route.params.token
                    })
                        .then(response => {
                            this.toggleLoading()

                            this.flash('Password has been reset.')

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
