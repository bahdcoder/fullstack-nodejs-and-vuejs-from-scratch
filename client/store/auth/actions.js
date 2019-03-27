import client from '@client/utils/axios'

export const POST_REGISTER = 'POST_REGISTER'

export default {
    [POST_REGISTER]: (context, data) => client.post('auth/register', data)
}
