import type { Metadata } from "next";
import MyProfile from "./MyProfile";

export const metadata: Metadata = {
    title: 'My profile'
}

export default function MyProfilePage() {
    return (
        <MyProfile />
    )
}