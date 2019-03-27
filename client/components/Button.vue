<template>
    <button :disabled="disabled" @click="$emit('click')" class="w-full mt-3 text-sm py-5 text-white rounded-sm focus:outline-none hover:bg-emerald-light" :class="{ 'bg-emerald': !loading, 'bg-emerald-light cursor-not-allowed': loading }">
        <loader v-if="loading" />
        <span v-else>{{ label }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                required: false,
                default: false
            },
            label: {
                type: String,
                required: true
            },
            loading: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>
