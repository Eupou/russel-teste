import { twMerge } from "tailwind-merge"

export default function CardRoot({ className, children }) {
    const styles = {
        // background: "linear-gradient(rgb(1, 1, 1) 22%, rgb(0, 181, 240, 0.15))"
    }
    return (
        <div className={twMerge("text-white w-[22%] flex flex-col items-center pt-4 pb-5 mb-3 rounded-md", className)}>
            {children}
        </div>)
}