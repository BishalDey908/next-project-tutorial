"use client"
import { useSearchParams } from "next/navigation"

const Productlist = () => {
    const searchParams = useSearchParams()
    console.log("Inside",searchParams.get("category"))
    const catego = searchParams.get("category")
  return (
    <div>
      <h1>client {catego}</h1>
    </div>
  )
}

export default Productlist
