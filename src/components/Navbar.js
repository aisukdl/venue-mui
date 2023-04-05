import { Box, Drawer, IconButton } from "@mui/material"
import { NavItems } from "./NavItems"
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    return(
        <Box textAlign="left" padding={1} sx={{ width: '200px'}}>
            <IconButton 
                sx={{
                    display: { xs: 'block', lg: 'none' },
            }}>
                <MenuIcon />
            </IconButton>
            <Drawer 
                anchor="left"
                variant="temporary"
                sx={{
                    display: { xs: 'block', lg: 'none' },
            }}>
                <NavItems />
            </Drawer>
            <Box
                variant="permanent"
                sx={{
                    display: { xs: 'none', lg: 'block' },
                    width: "100%"
            }}>
                <NavItems />
            </Box>
        </Box>
    )
}