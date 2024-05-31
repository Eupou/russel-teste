import { twMerge } from "tailwind-merge"

export default function CardRoot({ className, children }) {
    return (
        <div className={twMerge("text-white w-[22%] flex flex-col items-center pt-4 pb-5 mb-3 rounded-md", className)}>
            {children}
        </div>)
}