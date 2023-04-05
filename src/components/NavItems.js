import styled from "@emotion/styled";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebIcon from '@mui/icons-material/Web';
import LockIcon from '@mui/icons-material/Lock';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

export const NavItems = () => { 
    return(
        <Box>
            <List>
                <ListItem>
                    <ListItemButton selected={true}>
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Dashboard
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            User
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Product
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <WebIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Blog
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Login
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <DoNotDisturbAltIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Not Found
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
)}