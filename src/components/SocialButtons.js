import { Button } from "@mui/material"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';

export const GoogleButton = () => { 
    return(
        <Button variant="outlined" sx={{height:"48px"}} fullWidth>
            <GoogleIcon color='error'  />
        </Button>
    )
}

export const FacebookButton = () => {
    return(
        <Button variant="outlined" sx={{height:"48px"}} fullWidth>
            <FacebookTwoToneIcon />
        </Button>
    )
}

export const TwitterButton = () => {
    return(
        <Button variant="outlined" sx={{height:"48px"}} fullWidth>
        <TwitterIcon />
    </Button>
    )
}