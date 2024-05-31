import { twMerge } from "tailwind-merge"

export default function CardOldPrice({ oldPrice, className }) {
    return (
        <div className={twMerge("mt-3 line-through text-slate-200", className)}>R$ {oldPrice}</div>
    )
}