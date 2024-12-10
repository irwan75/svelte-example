import {json} from '@sveltejs/kit'

export async function GET(parameters){
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return json({
            products: data.products
        });
    } catch (error) {
        return json({
            message: 'Failed to fetch products'
        });
    }
}