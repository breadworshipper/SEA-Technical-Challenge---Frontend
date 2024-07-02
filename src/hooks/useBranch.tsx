import { getBranch } from "@/services/branchService"
import { useState, useEffect } from "react"

export default function useBranch() {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await getBranch() 
        setData(data)
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
