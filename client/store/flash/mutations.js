export const FLASH_MESSAGE = 'FLASH_MESSAGE'
export const CLEAR_FLASH_MESSAGE = 'CLEAR_FLASH_MESSAGE'

export default {
    [FLASH_MESSAGE](state, message) {
        state.messages = [
            ...state.messages,
            message
        ]
    },
    [CLEAR_FLASH_MESSAGE](state, id) {
        state.messages = state.messages.filter(message => message.id !== id)
    }
}
