import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
    return (
        <form action={postTweet} className="border rounded-xl p-4 bg-amber-50 space-y-3 mb-5">
            <input 
                name="content" 
                placeholder="What's happened?" 
                className="w-full text-sm outline-none"
            />
            <div className="flex justify-end">
                <button 
                    type="submit" 
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition cursor-pointer outline-none"
                >
                    Tweet
                </button>
            </div>
        </form>
    )
}