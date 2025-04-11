import React from 'react';
import { Grid, Container, Paper, Box } from '@mui/material';
import { ColorCard } from './ColorCard';
import { DetalleCardBlue } from './DetalleCardBlue';
import { DetalleCardRed } from './DetalleCardRed';

export const ResponsiveGridLayout = () => {
    return (
        <Container
            /*Este contenedor es utilizado para mantener todo en formato de una columna, es 
            decir, grids siguientes quedan una debajo del otro */
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
            }}
        >
            {/* Fila 1 */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ColorCard colorFondo="Pink" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ColorCard colorFondo="PaleGreen" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ColorCard colorFondo="PaleTurquoise" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ColorCard colorFondo="Pink" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ColorCard colorFondo="PaleGreen" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ColorCard colorFondo="PaleTurquoise" />
                </Grid>
            </Grid>

            {/* Fila 2 */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DetalleCardBlue />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DetalleCardRed />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DetalleCardBlue />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DetalleCardRed />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DetalleCardBlue />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DetalleCardRed />
                </Grid>
            </Grid>
        </Container>
    );
};
