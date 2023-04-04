import { Box, Button, Checkbox, Divider, Stack, TextField, Typography } from "@mui/material";

import LoginHeader from "./LoginHeader";
import { FacebookButton, GoogleButton, TwitterButton } from "./SocialButtons";
import { LoginField } from "./LoginField";
import { LoginFormFooter } from "./LoginFormFooter";

function LoginForm(){
    return(
        <Box>
            <LoginHeader />
            <Stack spacing={2} direction="row">
                <GoogleButton />
                <FacebookButton />
                <TwitterButton />
            </Stack>
            <Divider sx={{marginY:3}}>OR</Divider>
            <LoginField />
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: 2}}>
                <Checkbox />
                <a href='#' style={{textDecoration:"none"}}>Forgot password?</a>
            </Stack>
            <LoginFormFooter />
        </Box>
    )
}

export default LoginForm