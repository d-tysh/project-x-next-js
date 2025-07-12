import Image from "next/image"
import Link from "next/link"
import { Menu } from "./Menu"

export const Header = () => {
    return(
        <header
            className="border-b px-6 py-4 flex items-center justify-between"
        >
            <Link href='/' className="flex items-center gap-3" >
                <Image src='/x_logo.svg' alt='X logo' width={28} height={28} priority />
            </Link>

            <Menu />
        </header>
    )
}