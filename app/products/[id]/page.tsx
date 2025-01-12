
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import Breadcrumbs from "@/components/single-product/Breadcrumbs";
import { ProductRating } from "@/components/single-product/productRating";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { fetchSingleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params: { id } }: { params: { id: string } }) {
    const product = await fetchSingleProduct(id);

    const { image, name, company, description, price } = product;
    const dollarAmount = formatCurrency(price);

    return (
        <section>
            <Breadcrumbs name={product.name} />
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                <div className="relative h-full ">
                    <Image src={image} alt={name} fill
                        sizes="(max-width:768px) 100vw, 
                    (max-width:1200px) 50vw, 
                    33vw, 
                    "
                        priority className="w-full rounded object-cover" />
                </div>
                <div>
                    <div className="flex gap-x-8 items-center ">
                        <h1 className="capitalize text-3xl font-bold">{name}</h1>
                        <FavoriteToggleButton productId={id} />
                    </div>
                    <ProductRating productId={id} />
                    <h4 className="text-xl mt-2">{company}</h4>
                    <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
                        {dollarAmount}
                    </p>
                    <p className="mt-6 leading-8 text-muted-foreground">
                        {description}
                    </p>
                    <AddToCart productId={id} />
                </div>

            </div>

        </section>
    )
}
