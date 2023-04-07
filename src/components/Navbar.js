import { Box, Drawer, IconButton } from "@mui/material"
import { NavItems } from "./NavItems"
import MenuIcon from '@mui/icons-material/Menu';
import { UserInfo } from "./UserInfo";

export const Navbar = () => {
    return(
        <Box textAlign="left" padding={1} sx={{ width: '200px'}}>
            {/* navbar toggle button for xs */}
            <IconButton 
                sx={{
                    display: { xs: 'block', lg: 'none' },
            }}>
                <MenuIcon />
            </IconButton>
            {/* xs toggleable drawer */}
            <Drawer 
                anchor="left"
                variant="temporary"
                sx={{
                    display: { xs: 'block', lg: 'none' },
            }}>
                <Box sx={{
                    marginBottom: '48px'
                }}>
                    <UserInfo />
                </Box>
                <NavItems />
            </Drawer>
            {/* lg navbar  */}
            <Box
                sx={{
                    display: { xs: 'none', lg: 'block' },
                    width: "100%"
            }}>
                <Box sx={{
                    margin: '24px 8px 48px'
                }}>
                    <UserInfo />
                </Box>
                <NavItems />
            </Box>
        </Box>
    )
}