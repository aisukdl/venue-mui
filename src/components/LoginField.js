import { Stack, TextField } from "@mui/material"

export const LoginField = () => {
    return(
        <Stack spacing={3}>
            <TextField fullWidth name="email" label="Email address" variant="outlined" />
            <TextField fullWidth name='password' type="password" label="Password" />
        </Stack>
    )
}