import Image from "next/image"

export interface IProduct {
    id: number,
    title: string,
    image: string,
    price: number
}

export function ProductCard({ title, image, price }: IProduct) {
    return (
        <div className="w-64 border rounded-xl p-4 cursor-pointer hover:bg-amber-50 transition">
            <Image
                width={100}
                height={100}
                src={image}
                alt={title}
                className="object-contain mb-3 rounded"
            />
            <h2 className="text-sm font-medium line-clamp-2 mb-1">
                {title}
            </h2>
            <p className="text-sm text-gray-500">${price}</p>
        </div>
    )
}