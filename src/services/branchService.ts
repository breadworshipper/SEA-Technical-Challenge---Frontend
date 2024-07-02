export async function getBranch() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/getbranch/`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
