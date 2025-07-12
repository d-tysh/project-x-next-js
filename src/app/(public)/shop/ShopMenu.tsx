'use client';

import { MenuItem } from "@/components/MenuItem";
import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation"

export default function ShopMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4 mb-5">
            <MenuItem href={PAGES.SHOP} isActive={PAGES.SHOP === pathname}>
                SSR
            </MenuItem>
            <MenuItem href={PAGES.SSG} isActive={PAGES.SSG === pathname}>
                SSG
            </MenuItem>
            <MenuItem href={PAGES.ISR} isActive={PAGES.ISR === pathname}>
                ISR
            </MenuItem>
        </nav>
    )
}