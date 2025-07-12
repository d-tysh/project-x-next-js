import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Profile'
}

export default function ProfilePage() {    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
        </div>
    )
}