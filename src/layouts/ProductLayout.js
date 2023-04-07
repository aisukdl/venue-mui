import { Box, Grid, Typography } from "@mui/material"
import { ProductCard } from "../components/ProductCard"
export const ProductLayout = ({children}) => {
    return(
        <Box padding={6}>
            <Typography variant='h6' marginBottom={3}>
                Products
            </Typography>
            {children}
        </Box>
    )
}