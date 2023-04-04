import { Box, Grid, Stack, Typography } from "@mui/material";

function LoginLayout({children,welcomeText,welcomeImage}) {
    return (
        <Box>
            <Grid container>
                <Grid item sm={3} sx={{
                    display: {xs: "none",sm:"block"}
                }}>
                    <Stack sx={{
                        height:"100vh",
                        maxWidth: 480,
                        boxShadow:"rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <Box sx={{
                        marginTop: 10,
                        marginBottom: 5,
                        }}
                        >
                            <Typography variant='h5'>
                                {welcomeText}
                            </Typography>
                            <Box>
                                <img style={{width:"100%"}} alt={welcomeImage.alt} src={welcomeImage.src} /> 
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            height:"100vh",
                            textAlign:"left",
                            paddingX: 3
                    }}>
                        <Box sx={{
                            width: "100%",
                            maxWidth:480
                        }}>
                            {children}
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginLayout;