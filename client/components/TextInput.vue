<template>
    <input
        type="text"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        class="w-full text-xs focus:outline-none bg-brown-lightest p-5 text-brown mb-3"
    >
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
            }
        }
    }
</script>
