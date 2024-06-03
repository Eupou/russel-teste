"use client"
import { Card } from "@/components/card"

export default function HocProducts({ pageDetails }) {
    return (
        <>
            <section className="mt-16">
                <Card.Root className="sm:flex-row justify-center w-[95%] m-auto sm:w-[100%]">
                    <Card.Image unoptimized={true} className="m-0 sm:w-[35%]" img={pageDetails.img} />
                    <div className="sm:w-[40%] sm:ml-10">
                        <Card.Description className="text-2xl md:text-3xl text-default-black" description={pageDetails.description} />
                        <div className="flex flex-col lg:flex-row text-default-black mt-4">
                            <div className="">
                                Vendido e entregue por <span className="text-default-blue font-bold">Logitech Brasil</span> <span className="ml-2 hidden lg:inline-block">|</span>
                            </div>
                            <div className="lg:ml-3 text-default-purple font-bold">Em estoque</div>
                        </div>
                        <Card.OldPrice className="text-default-black" oldPrice={pageDetails.oldPrice} />
                        <Card.NewPrice className="text-default-purple sm:text-4xl lg:text-4xl" newPrice={pageDetails.newPrice} />
                        <div className="text-black">à vista no pix</div>
                        <div className="flex flex-col lg:flex-row mt-4">
                            <Card.Button text="comprar" className="text-base p-2 font-light mt-0 ml-0 mr-0 text-white bg-default-purple w-[100%] lg:w-fit hover:bg-default-hover-purple transition" />
                            <Card.Button text="adicionar ao carrinho" className="text-sm sm:text-base p-2 ml-0 mt-3 lg:mt-0 lg:ml-3  text-default-purple bg-transparent border border-default-purple w-[100%] lg:w-fit hover:bg-default-purple hover:text-white transition" />
                        </div>
                    </div>
                </Card.Root>
            </section>
        </>
    )
}