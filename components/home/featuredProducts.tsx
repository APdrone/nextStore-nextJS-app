import { fetchFeaturedProducts } from '@/utils/actions'
import React from 'react'
import EmptyList from '@/components/global/emptyList';
import SectionTitle from '@/components/global/sectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';

export default async function FeaturedProducts() {
    const products = await fetchFeaturedProducts();

    if (products.length === 0) {
        return <EmptyList />
    }
    return (
        <section className='pt-24'>
            <SectionTitle text="featured products" />
            <ProductsGrid products={products} />
        </section>
    )
}
