import { ProductCard, type IProduct } from "@/components/ProductCard";
import { API_URL } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shop SSG'
}

export default async function ShopSSGPage() {
    const response = await fetch(API_URL);
    const products = (await response.json()) as IProduct[];
    return (
        <>
                <h2 className="text-2xl font-bold mb-6">SSG</h2>
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