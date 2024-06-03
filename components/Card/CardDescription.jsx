import { twMerge } from "tailwind-merge"

export default function CardDescription({ description, className }) {
    return (
        <div className={twMerge("mt-2 text-sm font-bold", className)}>
            {description}
        </div>
    )
}