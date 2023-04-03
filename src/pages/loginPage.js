import { Box, Button, Checkbox, Divider, TextField } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { Stack } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';

function LoginPage() {
  return (
    <div>
        <Grid container>

            <Grid item xs={3}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ 
                        height:"100vh",
                        maxWidth: 480,
                        boxShadow:"rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                }}>
                    <Box sx={{
                         margin: "80px 0px 40px"
                    }}>
                        <h1>Hi, Welcome back</h1>
                        <img style={{maxWidth:"100%"}} alt="login-illust" src='https://minimal-kit-react.vercel.app/assets/illustrations/illustration_login.png' />
                    </Box>
                </Stack>
            </Grid>

            <Grid item xs={9}>
                <Stack 
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{height:"100%",textAlign:"left"}}
                >
                    <Box
                    sx={{
                        width: "100%",
                        maxWidth:480
                    }}>
                        <h2>Sign In</h2>
                        <p style={{fontSize:"0.875 rem",margin:"0 0 40px"}}>Don’t have an account? <span><a href="#">Get started</a></span></p>
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" sx={{minWidth:"64px",width:"100%",height:"48px"}}>
                                <GoogleIcon color='error'/>
                            </Button>
                            <Button variant="outlined" sx={{minWidth:"64px",width:"100%",height:"48px"}}>
                                <FacebookTwoToneIcon />
                            </Button>
                            <Button variant="outlined" sx={{minWidth:"64px",width:"100%",height:"48px"}}>
                                <TwitterIcon />
                            </Button>
                        </Stack>
                        <Divider sx={{margin:'24px 0'}}>OR</Divider>
                        <Stack spacing={2}>
                            <TextField fullWidth name="email" label="Email address" variant="outlined" />
                            <TextField fullWidth name='password' type="password" label="Password" />
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ margin: "16px 0"}}>
                            <Checkbox />
                            <a href='#' style={{textDecoration:"none"}}>Forgot password?</a>
                        </Stack>
                        <Button variant="contained" fullWidth sx={{height:"48px"}}>Login</Button>
                    </Box>
                </Stack>
            </Grid>

        </Grid>
    </div>
  );
}

export default LoginPage;