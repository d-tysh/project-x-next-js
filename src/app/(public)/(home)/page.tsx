import { TWEETS } from "@/shared/data/tweets.data";
import { Tweet } from "./Tweet";
import type { Metadata } from "next";
import { TweetForm } from "./TweetForm";

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <TweetForm />
      <div className="space-y-3">
        {
          TWEETS.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
        }
      </div>
    </div>
  );
}
