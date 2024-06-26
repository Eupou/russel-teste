"use client"

import products from "../products.json"
import { Card } from "./Card/Index"
import { useState, useEffect } from "react"

export default function Products() {
    const [clientWidth, setClientWidth] = useState(700)

    useEffect(() => {
        setClientWidth(window.innerWidth)
    })

    return (
        <section className="pt-20 bg-[#fafafa] " >
            <div className="flex items-center mb-5">
                <h1 className="ml-10  text-xl font-bold">Placas de vídeo</h1>
                <div className="ml-2 tracking-tight text-[10px] pr-[0.2rem] pl-[0.2rem] pt-[0.1rem] pb-[0.1rem]  font-bold text-default-purple bg-default-purple/[0.30]">HARDWARE</div>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {products.map(item => {
                    const shortDescription = item.description.slice(0, 30).concat("...")
                    return (<Card.Root key={item.id} specialBg="" className="shadow-[0_3px_3px_1px_rgba(1,1,1,0.3)] md:shadow-none bg-white w-[42%] sm:w-52 pr-3 pl-3 hover:bg-default-hover-gray transition">
                        <Card.Image className="w-44" img={item.img} />
                        <div className="w-[100%] mt-3">
                            {clientWidth < 700 ?

                                <Card.Description className="text-black leading-tight" description={shortDescription} /> :
                                <Card.Description className="text-black leading-tight" description={item.description} />

                            }
                            <Card.OldPrice className="text-black text-sm leading-none mt-5" oldPrice={item.oldPrice} />
                            <Card.NewPrice className="text-black text-base leading-tight" newPrice={item.newPrice} />
                            <Card.Descount className="text-default-purple text-xs font-light mt-0 " text={item.descount} />
                        </div>
                        <Card.Button url={`/products/${item.id}`} text="comprar" className="bg-default-purple hover:bg-default-hover-purple transition text-white w-[100%] text-base font-light mt-5" />
                    </Card.Root>
                    )
                })}

            </div>
        </section>
    )
}