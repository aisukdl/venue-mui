import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
export const ProductCard = ({product}) => {
    return(
            <Card>
                <CardMedia sx={{ height: "200px", objectFit:"cover" }}
                    image={product.image}
                    title={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="caption" component="div" textAlign="right">
                        {product.price}
                    </Typography>
                </CardContent>
            </Card>
    )
}