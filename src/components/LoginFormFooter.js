import { Button, Stack } from "@mui/material"

export const LoginFormFooter = () => {
    return (
        <Stack spacing={2}>
            <Button variant="contained" fullWidth sx={{height:"48px"}}>Login</Button>
        </Stack>
    )
}