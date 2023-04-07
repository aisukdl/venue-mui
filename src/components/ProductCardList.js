import { Grid } from "@mui/material"
import { ProductCard } from "./ProductCard"

export const ProductCardList = ({products}) => {
    return(
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid key = {product.id} item xs={12} sm={6} md={3}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}