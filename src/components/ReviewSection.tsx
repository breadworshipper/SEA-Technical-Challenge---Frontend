import useReview from "@/hooks/useReview"
import ReviewCard from "./ReviewCard"
import { ReviewSkeleton } from "./ReviewSkeleton"
import ReviewPagination from "./ReviewPagination"

export function ReviewSection(toast: any) {
  const { data, loading, error, page, setPage } = useReview(toast)
  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-y-10">
          <ReviewSkeleton />
          <ReviewSkeleton />
          <ReviewSkeleton />
          <ReviewSkeleton />
          <ReviewSkeleton />
        </div>
      ) : (
        <div>
          {error ? (
            <div className="mx-auto">Error fetching reviews</div>
          ) : (
            <div>
              {data.data.length === 0 ? (
                <div className="mx-auto">No reviews found</div>
              ) : (
                <div className="flex flex-col gap-y-6">
                  {data.data.map((review: any, index) => (
                    <ReviewCard
                      key={index}
                      name={review.name}
                      date={review.date}
                      rating={review.rating}
                      review={review.review}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          <ReviewPagination pageData={data} setPage={setPage} />
        </div>
      )}
    </div>
  )
}
