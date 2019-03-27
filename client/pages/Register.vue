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
                <button @click="register" class="w-full mt-3 text-sm py-5 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-light">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
                })
            }
        }
    }
</script>
