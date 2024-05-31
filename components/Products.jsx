import products from "../products.json"
import { Card } from "./card"

export default function Products() {
    return (
        <section className="pt-20 bg-[#fafafa] " >
            <div className="flex items-center mb-5">
                <h1 className="ml-10  text-xl font-bold">Placas de vídeo</h1>
                <div className="ml-2 tracking-tight text-[10px] pr-[0.2rem] pl-[0.2rem] pt-[0.1rem] pb-[0.1rem]  font-bold text-default-purple bg-default-purple/[0.30]">HARDWARE</div>
            </div>
            <div className="flex justify-evenly">
                {products.map(item => {
                    return (<Card.Root className="w-52 pr-3 pl-3 hover:bg-default-hover-gray transition">
                        <Card.Image className="w-44" img={item.img} />
                        <div className="w-[100%] mt-3">
                            <Card.Description className="text-black leading-tight" description={item.description} />
                            <Card.OldPrice className="text-black text-sm leading-none mt-5" oldPrice={item.oldPrice} />
                            <Card.NewPrice className="text-black text-base leading-tight" newPrice={item.newPrice} />
                            <Card.Descount className="text-default-purple text-xs font-light mt-0 " text={item.descount} />
                        </div>
                        <Card.Button className="bg-default-purple hover:bg-default-hover-purple transition text-white w-[100%] text-base font-light mt-5" />
                    </Card.Root>
                    )
                })}

            </div>
        </section>
    )
}