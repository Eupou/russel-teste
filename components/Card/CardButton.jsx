import Link from "next/link"
import { twMerge } from "tailwind-merge"

export default function CardButton({ className, url = "/", text = "texto" }) {
    return (
        <Link href={url} className={twMerge("m-auto text-center mt-3 bg-default-blue text-default-black text-lg font-semibold  p-1 w-[85%]", className)}>
            {text.toUpperCase()}
        </Link>
    )
}