import axios from 'axios';

    export async function ConnecteUserData() {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/me', {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }