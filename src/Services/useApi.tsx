import axios from 'axios';

export const useApi = () => ({
    validateToken: async(token: string) => {

        return {
            user: { id: 1, name: 'Patrick', email: 'patrick@mail.com' }
        }; // FAKE
        
        const { data } = await axios.post('/validate', token);
        return data;

    },

    signIn: async (email: string, password: string) => {

        return {
            user: { id: 1, name: 'Patrick', email: 'patrick@mail.com' },
            token: '15614856484'
        };  // FAKE

        const { data } = await axios.post('/signin', {email, password});
        return data;

    },


    signOut: async () => {
        return { status: true } // Fake

        const { data } = await axios.post('/logout');
        return data;
    }
})