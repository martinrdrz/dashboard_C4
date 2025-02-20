import { useAuthStore } from './store';

export const useAuth = () => {
    const status = useAuthStore((state) => state.status);
    const errorMessage = useAuthStore((state) => state.errorMessage);
    const email = useAuthStore((state) => state.email);
    const checking = useAuthStore((state) => state.checking);
    const onLogin = useAuthStore((state) => state.onLogin);
    const onLogout = useAuthStore((state) => state.onLogout);
    //const clearErrorMesage = useAuthStore((state) => state.clearErrorMesage);

    return {
        isAuthenticated,
        user,
        login,
        logout,
    };
};
