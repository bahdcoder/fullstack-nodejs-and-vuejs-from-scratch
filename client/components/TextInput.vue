<template>
    <div class="mb-3">
        <input
            :type="type"
            :name="name"
            :value="value"
            @focus="$emit('focus')"
            @blur="$emit('blue')"
            :placeholder="placeholder"
            @change="$emit('input', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            class="w-full text-xs focus:outline-none bg-brown-lightest p-5 text-brown"
        >

        <span v-if="error" class="text-xs text-red">{{ error }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            value: {
                type: String,
                required: false,
                default: ''
            },
            name: {
                type: String,
                required: true
            },
            error: {
                type: String,
                required: false
            }
        }
    }
</script>
