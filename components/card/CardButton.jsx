import { twMerge } from "tailwind-merge"

export default function CardButton({ className, text = "texto" }) {
    return (
        <button className={twMerge("m-auto mt-3 bg-default-blue text-default-black text-lg font-semibold  p-1 w-[85%]", className)}>
            {text.toUpperCase()}
        </button>
    )
}