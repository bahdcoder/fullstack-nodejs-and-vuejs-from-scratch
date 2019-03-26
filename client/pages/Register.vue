<template>
    <div class="container my-16 w-full mx-auto">
        <div class="max-w-sm mx-auto">
            <h2 class="text-center text-gold">Register</h2>

            <div class="w-full bg-white shadow-md mt-5 rounded-sm p-12">
                <text-input
                    :value="model.name"
                    v-model="model.name"
                    placeholder="Enter your name"
                />
                <text-input
                    :value="model.email"
                    v-model="model.email"
                    placeholder="Enter your email"
                />
                <text-input
                    type="password"
                    :value="model.password"
                    v-model="model.password"
                    placeholder="Enter your password"
                />
                <button class="w-full mt-3 text-sm py-5 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-light">
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
        })
    }
</script>
