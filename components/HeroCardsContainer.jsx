import HeroCard from "./HeroCard";
import wirelessItems from "../wirelessItems"

export default function HeroCardsContainer() {
    return (
        <div className="flex justify-evenly w-[100%] mt-10 pb-5">
            {wirelessItems.map(item => <HeroCard img={item.img} description={item.description} oldPrice={item.oldPrice} newPrice={item.newPrice} />)}
        </div>
    )
}