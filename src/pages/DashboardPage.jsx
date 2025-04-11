import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    TextCard,
    ColorCard,
    DetalleCardBlue,
    DetalleCardRed,
    ResponsiveGridLayout,
    ResponsiveFlexLayout,
} from '../components/dashboard';

export const DashboardPage = () => {
    return (
        <>
            <Typography variant="h5" marginBottom={2}>
                Dashboard
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* <ResponsiveGrid /> */}
                <ResponsiveGridLayout />
                {/* <ResponsiveFlexLayout />
                <ColorCard colorFondo="Pink" />
                <ColorCard colorFondo="PaleGreen" />
                <ColorCard colorFondo="PaleTurquoise" />
                <DetalleCardBlue />
                <DetalleCardRed />
                <TextCard />
                <TextCard /> */}
            </Box>
        </>
    );
};
