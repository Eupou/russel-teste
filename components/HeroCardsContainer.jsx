"use client"
import { useEffect, useState } from "react";
import wirelessItems from "../wirelessItems"
import { Card } from "./Card/Index";

export default function HeroCardsContainer() {
    const [clientWidth, setClientWidth] = useState(700)

    useEffect(() => {
        setClientWidth(window.innerWidth)
    })

    return (
        <div className="flex flex-wrap justify-evenly w-[100%] mt-10 pb-5">
            {wirelessItems.map(item => {
                const shortDescription = item.description.slice(0, 34).concat("...")
                return (
                    <Card.Root key={item.id} className="w-[42%] lg:w-[22%] bg-gradient-to-b from-default-black from-22% to-default-blue/[0.15] to-90% hover:to-default-blue/[0.3] transition">
                        <Card.Image className="w-[85%]" img={item.img} />
                        <div className="w-[85%] mt-3">
                            <Card.Logo />
                            {clientWidth < 700 ?
                                <Card.Description description={shortDescription} /> :
                                <Card.Description description={item.description} />
                            }
                            <Card.OldPrice oldPrice={item.oldPrice} />
                            <Card.NewPrice className="text-2xl  sm:text-4xl lg:text-3xl" newPrice={item.newPrice} />
                        </div>
                        <Card.Button text="comprar" url={`/products/wirelessProducts/${item.id}`} className="hover:bg-default-hover-blue transition" />
                    </Card.Root>
                )
            })}
        </div>
    )
}