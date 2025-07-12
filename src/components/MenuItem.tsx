import Link from "next/link"
import type { ReactNode } from "react"

interface Props {
    href: string,
    isActive: boolean,
    children: ReactNode
}

export const MenuItem = ({ href, isActive, children }: Props) => {
    return (
        <Link 
            className={`
                ${isActive ? 'text-blue-500' : 'text-black'} 
                hover:text-blue-300 transition
            `} 
            href={href}>
            { children }
        </Link>
    )
}