import { twMerge } from "tailwind-merge"

export default function CardNewPrice({ newPrice, className }) {
    return (
        <div className={twMerge("text-default-blue text-3xl font-bold", className)}>
            R$ {newPrice}
        </div>
    )
}