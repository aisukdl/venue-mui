import { Box, Typography, Stack } from "@mui/material"

export const UserInfo = () => {
    return(
        <Box sx={{
            backgroundColor : 'rgba(145, 158, 171, 0.12)',
            padding : '16px 20px',
            borderRadius: '9px'
        }}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent='space-between'>
                <img
                    src='https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/326350125_708625220666941_6797707394636763364_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEJ-HyZnAZc_xlMZB9ybllRKuXwZH5GNWoq5fBkfkY1ajgl7Yad8Uh23Lga4ck8GYg4WPUCTTcsbe4uGkuiXrnc&_nc_ohc=a40ExotS9u4AX95VITF&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfASlQaEIIG3QrGDw5v9gMt7hV_G8fsfx-q8yI2UGe2_LA&oe=6433FCE5'
                    alt='profile-image'
                    style={{
                        borderRadius:'50%',
                        width:'32px',
                        height:'32px',
                        objectFit: 'cover'
                    }}
                />
                <Box flexGrow='1'>
                    <Typography variant="body2" component='div'>
                        Saddo Catto
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}