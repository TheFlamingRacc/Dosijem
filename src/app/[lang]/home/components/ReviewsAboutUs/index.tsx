import { Dictionary } from "@/app/[lang]/dictionaries";
import ReviewsAboutUsClient from "./ReviewsAboutUsClient";

type ReviewData = {
  username: string;
  rate: 5 | 4 | 3 | 2 | 1;
  reviewText: string;
};

async function getReviews(): Promise<ReviewData[]> {
  const res = await fetch("https://api.dosijem.com/reviews/random", {
    next: {
      revalidate: 60 * 5,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}

type Props = {
  dict: Dictionary;
};

export default async function ReviewsAboutUs({ dict }: Props) {
  const reviewsData = await getReviews();

  return (
    <ReviewsAboutUsClient
      reviews={reviewsData}
      dict={dict}
    ></ReviewsAboutUsClient>
  );
}
