'use client';

import { usePathname } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";

export const Menu = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-6 font-semibold">
            {
                MENU.map(item => 
                    <MenuItem 
                        key={item.href} 
                        href={item.href} 
                        isActive={pathname === item.href}
                    >
                        {item.name}
                    </MenuItem>)
            }
        </nav>
    )
}