<template>
    <div class="container my-16 w-full mx-auto">
        <div class="max-w-sm mx-auto">
            <h2 class="text-center text-gold">Register</h2>

            <div class="w-full bg-white shadow-md mt-5 rounded-sm p-12">
                <text-input
                    name="name"
                    :value="model.name"
                    v-model="model.name"
                    v-validate="'required'"
                    placeholder="Enter your name"
                    :error="errors.first('name')"
                />
                <text-input
                    name="email"
                    :value="model.email"
                    v-model="model.email"
                    v-validate="'required|email'"
                    placeholder="Enter your email"
                    :error="errors.first('email')"
                />
                <text-input
                    type="password"
                    name="password"
                    :value="model.password"
                    v-model="model.password"
                    v-validate="'required|min:6'"
                    :error="errors.first('password')"
                    placeholder="Enter your password"
                />
                <btn
                    label="Sign Up"
                    :disabled="loading"
                    :loading="loading"
                    @click="register"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import formMixin from '@client/mixins/form'
    import { POST_REGISTER, SET_AUTH } from '@store/auth/actions'

    export default {
        mixins: [formMixin],
        data: () => ({
            model: {
                name: '',
                email: '',
                password: ''
            }
        }),

        methods: {
            register() {
                this.$validator.validate().then(isValid => {
                    if (! isValid) {
                        return
                    }

                    this.toggleLoading()

                    this.$store.dispatch(POST_REGISTER, this.model)
                        .then(response => {
                            this.toggleLoading()

                            this.flash('Succesfully registered.')

                            this.setAuth(response.data)
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
