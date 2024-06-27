import { getReviews } from "@/services/reviewService"
import { useState, useEffect } from "react"
import { GiConsoleController } from "react-icons/gi"

export default function useReview(toast: any) {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getReviews(page, toast) // Use await here
        setData(data)
        console.log(data.page)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
        setError(true)
      }
    }

    fetchData()
  }, [page])

  return { data, loading, error, page, setPage }
}
