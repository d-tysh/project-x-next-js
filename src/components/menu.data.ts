import { PAGES } from "@/config/pages.config"

export interface IMenu {
    href: string,
    name: string
}

export const MENU = [
    {
        href: PAGES.HOME,
        name: 'Home'
    },
    {
        href: PAGES.EXPLORE,
        name: 'Explore'
    },
    {
        href: PAGES.MY_PROFILE,
        name: 'Profile'
    },
    {
        href: PAGES.SHOP,
        name: 'Shop'
    }
]