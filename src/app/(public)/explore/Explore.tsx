'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Explore = () => {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Explore{tag && ` by #${tag}`}</h1>
            {
                !tag && 
                <p>For example, you can explore by tag&nbsp;
                    <Link href='/explore?tag=Front-End' className="text-blue-500 text-center">#Front-End</Link>
                </p>
            }
            {
                tag && 
                <p className="text-center">Information about #{tag}</p>
            }
        </div>
    )
}