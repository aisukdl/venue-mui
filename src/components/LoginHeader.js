import { Box, Typography } from "@mui/material";

function LoginHeader(){
    return(
        <Box sx={{ marginBottom:5 }}>
            <Typography variant='h5' gutterBottom>Sign In</Typography>
            <Typography variant='p'>
                Don’t have an account? <a href="#">Get started</a>
            </Typography>
        </Box>
    )
}

export default LoginHeader;