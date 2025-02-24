import * as React from 'react';
import { useState, useEffect } from 'react';
//import { useAuthStore, useForm } from '../hooks';
import { useAuth, useForm } from '../hooks';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSnackbar } from 'notistack';
import Swal from 'sweetalert2';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const formData = {
    loginEmail: 'martinrdrz@hotmail.com',
    loginPassword: '123456',
};

const formValidations = {
    loginEmail: [(value) => value.includes('@'), 'El correo debe de tener una @.'],
    loginPassword: [(value) => value.length >= 6, 'El password debe detener mas de 6 letras.'],
};

export const LoginPage = () => {
    const { enqueueSnackbar } = useSnackbar();
    //const { startLogin, errorMessage } = useAuthStore();
    const { startLogin, errorMessage } = useAuth();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { loginEmail, loginPassword, onInputChange, isFormValid, loginEmailValid, loginPasswordValid } = useForm(
        formData,
        formValidations
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        startLogin({ email: loginEmail, password: loginPassword });
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('LoginEmail'),
        //     password: data.get('loginPassword'),
        // });
    };

    const handleMensaje = (mensaje) => {
        enqueueSnackbar(mensaje, { variant: 'success' });
    };

    useEffect(() => {
        if (errorMessage !== undefined && errorMessage !== null) {
            Swal.fire('Error en la autenticacion', errorMessage, 'error');
        }
    }, [errorMessage]);

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="loginEmail"
                        label="Email Address"
                        name="loginEmail"
                        value={loginEmail}
                        onChange={onInputChange}
                        error={!!loginEmailValid && formSubmitted}
                        helperText={loginEmailValid}
                        autoComplete="email"
                        autoFocus
                        type="text"
                        placeholder="Email Address"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="loginPassword"
                        value={loginPassword}
                        onChange={onInputChange}
                        error={!!loginPasswordValid && formSubmitted}
                        helperText={loginPasswordValid}
                        label="Password"
                        type="password"
                        id="loginPassword"
                        autoComplete="current-password"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Button
                                onClick={() => handleMensaje('Conacte al administrador')}
                                variant="text"
                                sx={{ textTransform: 'none', padding: 0, color: 'primary.main' }}
                            >
                                Olvidó su contraseña?
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => handleMensaje('Contacte al administrador')}
                                variant="text"
                                sx={{ textTransform: 'none', padding: 0, color: 'primary.main' }}
                            >
                                No tiene una cuenta?
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 6, mb: 4 }} />
        </Container>
    );
};
