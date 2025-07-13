import { ProductCard, type IProduct } from "@/components/ProductCard";
import { API_URL } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shop ISR'
}

export default async function ShopISRPage() {
    const response = await fetch(API_URL, {
        next: {revalidate: 300}
    });
    const products = (await response.json()) as IProduct[];
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">ISR</h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))
                }
            </div>
        </>
    )
}