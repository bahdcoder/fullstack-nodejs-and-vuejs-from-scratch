<template>
    <div>
        <div class="w-full h-12 text-white flex items-center justify-center" v-for="message in flashMessages" :key="message.id" :class="{ 'bg-green': message.type === 'success', 'bg-red': message.type === 'error' }">
            {{ message.message }}
        </div>
    </div>
</template>
