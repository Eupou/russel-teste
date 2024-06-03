import Image from "next/image"
import { twMerge } from "tailwind-merge"

export default function CardImage({ img, className }) {
    return (
        <Image className={twMerge("w-56 m-auto", className)} src={img} width={250} height={200} alt="mouse" />
    )
}