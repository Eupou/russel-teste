"use client"
import { useEffect, useState } from "react"
import wirelessProducts from "@/wirelessItems.json"
import HocProducts from "../../HocProducts"

export default function ProductDetailts({ params }) {
    const [pageDetails, setPageDetails] = useState("")

    useEffect(() => {
        wirelessProducts.map(item => {
            if (params.productId == item.id) {
                setPageDetails(item)
            }
        })
    }, [])

    return (
        <>
            <HocProducts pageDetails={pageDetails} />
        </>
    )
}