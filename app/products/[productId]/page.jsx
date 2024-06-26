"use client"
import { useEffect, useState } from "react"
import products from "../../../products.json"
import HocProducts from "../HocProducts"

export default function ProductDetailts({ params }) {
    const [pageDetails, setPageDetails] = useState("")

    useEffect(() => {
        products.map(item => {
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