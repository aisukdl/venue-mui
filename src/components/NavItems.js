import styled from "@emotion/styled";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebIcon from '@mui/icons-material/Web';
import LockIcon from '@mui/icons-material/Lock';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import { Link } from "react-router-dom";

export const NavItems = () => { 
    return(
        <Box>
            <List>
                <Link to='/dashboard'>
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
                </Link>
                <Link to='#'>
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
                </Link>
                <Link to='/products'>
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
                </Link>
               <Link to='#'>
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
               </Link>
               <Link to='/login'>
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
               </Link>
                <Link to='#'>
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
                </Link>
            </List>
        </Box>
)}