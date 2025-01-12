import React from 'react'
import HeroCarousel from './heroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'


function Hero() {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mt-16'>
            <div>
                <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
                    We are changing the way people shop
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
                    Discover timeless furniture crafted for comfort and style.
                    Transform your space with elegant designs, premium quality,
                    and unbeatable value. Shop now for your dream home.

                </p>
                <Button asChild size='lg' className='mt-10'>
                    <Link href='/products'>Our Products</Link>
                </Button>
            </div>
            <HeroCarousel />
        </section>
    );
}

export default Hero;
