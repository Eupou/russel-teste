import Image from "next/image"
import logo from "../../public/images/logitechlogo.png"

export default function CardLogo() {
    return (
        <div className="text-default-blue flex">
            <Image src={logo} className="w-[10%] object-contain" />
            <div className="ml-2 text-sm">LOGITECH</div>
        </div>
    )
}