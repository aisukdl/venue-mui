import { ProductLayout } from '../layouts/ProductLayout';
import { ProductCardList } from '../components/ProductCardList';
import { Typography } from '@mui/material';

const productList = [
    {
        id:1,
        name:'product1',
        image: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/310838853_5103511383087780_3024620325240883253_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RUqXmJ3orBkAX8Evwkz&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfC8qee7oo8jD2o0XwmTDyJKqPVkUK39lnajp99Y_EhTQA&oe=6431DD50',
        price: '100'
    },
    {
        id:2,
        name:'product1',
        image: 'https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/282030710_4713910385381217_6878373702387508463_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=JFN3_o39cmEAX8ZfOs1&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfDlIHuVv-UHtw_koeI1VVLIgVQPzneEtWKlTQQk5OG2BA&oe=64334469',
        price: '100'
    },
    {
        id:3,
        name:'product1',
        image: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/310106382_5088559201249665_69869525337105390_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7HP24T0MwvMAX-6Suze&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfCHUdjB2d2mQHObLakWRXG7Iv1TWesxPsajjSVIS1FSSA&oe=6432E4ED',
        price: '100'
    },
    {
        id:4,
        name:'product1',
        image: 'https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/310838853_5103511383087780_3024620325240883253_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RUqXmJ3orBkAX8Evwkz&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfC8qee7oo8jD2o0XwmTDyJKqPVkUK39lnajp99Y_EhTQA&oe=6431DD50',
        price: '100'
    },
    {
        id:5,
        name:'product1',
        image: 'https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/282030710_4713910385381217_6878373702387508463_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=JFN3_o39cmEAX8ZfOs1&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfDlIHuVv-UHtw_koeI1VVLIgVQPzneEtWKlTQQk5OG2BA&oe=64334469',
        price: '100'
    },
    {
        id:6,
        name:'product1',
        image: 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/310106382_5088559201249665_69869525337105390_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7HP24T0MwvMAX-6Suze&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfCHUdjB2d2mQHObLakWRXG7Iv1TWesxPsajjSVIS1FSSA&oe=6432E4ED',
        price: '100'
    }
]

function ProductPage() {
    return (
        <ProductLayout>
            <ProductCardList products={productList}/>
        </ProductLayout>
    );
}

export default ProductPage;