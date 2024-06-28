import { getReservation } from "@/services/reservationService"
import { useState, useEffect } from "react"

export default function useReservation() {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getReservation() // Use await here
        setData(data)
        console.log(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
