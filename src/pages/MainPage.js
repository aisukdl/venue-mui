import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { NavItems } from '../components/NavItems';
import { Navbar } from '../components/Navbar';
import ProductPage from './ProductPage';
import { Outlet } from 'react-router-dom';

function MainPage() {
  return (
    <div>
        <Grid container>
            <Grid item sm={2} xs={12}>
                <Navbar />
            </Grid>

            <Grid item xs={12} sm={10}>
               <Box textAlign="left" padding="24px">
                 <Outlet />
               </Box>
            </Grid>

        </Grid>
    </div>
  );
}

export default MainPage;