'use client';

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export default function MyProfile() {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
            <button 
                className="cursor-pointer border rounded-lg text-xl hover:bg-amber-100 px-4 transition" 
                onClick={() => router.push(PAGES.HOME)}
            >
                Go to home
            </button>
        </div>
    )
}