import Image from "next/image"

export default function CardImage({ img }) {
    return (
        <Image className="w-56 m-auto" src={img} width={250} height={200} alt="mouse" />
    )
}