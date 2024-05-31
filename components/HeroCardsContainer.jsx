import wirelessItems from "../wirelessItems"
import { Card } from "./card";

export default function HeroCardsContainer() {
    return (
        <div className="flex justify-evenly w-[100%] mt-10 pb-5">
            {wirelessItems.map(item => {
                return (
                    <Card.Root className="bg-gradient-to-b from-default-black from-22% to-default-blue/[0.15] to-90%">
                        <Card.Image img={item.img} />
                        <div className="w-[85%] mt-3">
                            <Card.Logo />
                            <Card.Description description={item.description} />
                            <Card.OldPrice oldPrice={item.oldPrice} />
                            <Card.NewPrice newPrice={item.newPrice} />
                        </div>
                        <Card.Button />
                    </Card.Root>
                )
            })}
        </div>
    )
}