import { useAuthStore } from './store';
import authApi from '../api/authApi';

export const useAuth = () => {
    const status = useAuthStore((state) => state.status);
    const errorMessage = useAuthStore((state) => state.errorMessage);
    const email = useAuthStore((state) => state.email);
    const checking = useAuthStore((state) => state.checking);
    const onLogin = useAuthStore((state) => state.onLogin);
    const onLogout = useAuthStore((state) => state.onLogout);
    //const clearErrorMesage = useAuthStore((state) => state.clearErrorMesage);

    const startLogin = async ({ email, password }) => {
        checking();
        try {
            //const { data } = await calendarApi.post('/auth', { email, password });
            // const { data } = {
            //     data: { name: 'martin', uid: 'uidailkmalksd83290834a', token: 'tokenaskdalksjdajsdl983749823eklsd' },
            // };
            const { data } = await authApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            onLogin({
                uid: data.uid,
                name: data.name,
                email: data.email,
                photoURL: data.photoURL ?? null, //devuelve data.photoURL si el mismo existe, caso contrario devuelve null
            });
        } catch (error) {
            onLogout('Credenciales incorrectas');
        }
    };

    const startLogout = () => {
        localStorage.clear();
        onLogout();
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return onLogout();
        try {
            const { data } = await authApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            onLogin({ uid: data.uid, name: data.name, email: data.email });
        } catch (error) {
            localStorage.clear();
            onLogout();
        }
    };

    return {
        //Propiedades
        status,
        errorMessage,
        //Metodos
        startLogin,
        checkAuthToken,
        startLogout,
    };
};
