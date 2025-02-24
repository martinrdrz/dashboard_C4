import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, C4DashboardPage } from '../pages';
//import { useAuthStore } from '../hooks';
import { useAuth } from '../hooks';
import { useEffect } from 'react';

export const AppRouter = () => {
    //const { status, checkAuthToken } = useAuthStore();
    const { status, checkAuthToken } = useAuth();
    //Este efecto es importante, porque loque hace al iniciar la aplicacion o recargar la pagina es verificar si existe el toekn en el localStorage, y si es asi verifica contra backend si es un token correcto y asume que ya se logueó en caso de que sea correcto dich token. Si el toekn es incorrecto procede a hacer el logout, lo cual pone el estado en "not-authenticated" y el codigo siguiente hace que el router evalue por donde entrar, y entra por la pagina de login.
    useEffect(() => {
        checkAuthToken();
    }, []);

    if (status === 'checking') {
        return <h3>Cargando . . .</h3>;
    }

    return (
        <Routes>
            {status === 'not-authenticated' ? (
                <>
                    <Route path="/auth/*" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/auth/login" />} />
                </>
            ) : (
                <>
                    <Route path="/*" element={<C4DashboardPage />} />
                </>
            )}
        </Routes>
    );
};
