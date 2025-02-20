import { create } from 'zustand';

const initialState = {
    status: 'checking', //'checking', 'authenticated' , 'not-authenticated'
    uid: null,
    name: null,
    email: null,
    photoURL: null,
    errorMessage: null,
};

export const useAuthStore = create((set) => ({
    ...initialState,
    checking: () => set(initialState),
    onLogin: (payload) =>
        set(() => ({
            status: 'authenticated',
            uid: payload.uid,
            name: payload.name,
            email: payload.email,
            photoURL: payload.photoURL,
            errorMessage: null,
        })),
    onLogout: (payload) => set({ ...initialState, status: 'not-authenticated', errorMessage: payload }),
    clearErrorMesage: () => set({ errorMessage: null }),
}));
