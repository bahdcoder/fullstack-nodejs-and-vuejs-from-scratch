export default {
    data: () => ({
        loading: false
    }),

    methods: {
        toggleLoading() {
            this.loading = !this.loading
        }
    }
}
