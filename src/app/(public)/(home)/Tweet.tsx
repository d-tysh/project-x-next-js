import { PAGES } from "@/config/pages.config"
import type { ITweet } from "@/shared/types/tweet.interface"
import Image from "next/image"
import Link from "next/link"

interface IProps {
    tweet: ITweet
}

export const Tweet = ({ tweet }: IProps) => {
    return(
        <div className="border-2 rounded-xl p-2">
            <div className="flex items-center gap-3 mb-2">
                <Image src='/x_logo.svg' alt='X logo' width={24} height={24} />
                <Link href={PAGES.PROFILE(tweet.author)} className="font-bold">@{tweet.author}</Link>
            </div>
            <p>{tweet.text}</p>
        </div>
    )
}