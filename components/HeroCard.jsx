import Image from "next/image"
import logo from "../public/images/logitechlogo.png"

export default function HeroCard({ img, description, oldPrice, newPrice }) {
    const styles = {
        background: "linear-gradient(rgb(1, 1, 1) 22%, rgb(0, 181, 240, 0.15))"
    }
    return (
        <div style={styles} className="text-white w-[22%] flex flex-col items-center pt-4 pb-5 mb-3 rounded-md">
            <Image className="w-56 m-auto" src={img} width={250} height={200} alt="mouse" />
            <div className="w-[85%] mt-3">
                <div className="text-default-blue flex">
                    <Image src={logo} className="w-[10%] object-contain" />
                    <div className="ml-2 text-sm">LOGITECH</div>
                </div>
                <div className="mt-2 text-sm font-bold">{description}</div>
                <div className="mt-3 line-through text-slate-200 ">R$ {oldPrice}</div>
                <div className="text-default-blue text-3xl font-bold">R$ {newPrice}</div>
            </div>
            <button className="m-auto mt-3 bg-default-blue text-default-black text-lg font-semibold  p-1 w-[85%]">COMPRAR</button>
        </div>
    )
}