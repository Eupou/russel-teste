import Image from 'next/image'
import HeroCardsContainer from './HeroCardsContainer'
import banner from "../public/images/smallBanner.jpeg"

export default function Hero() {
    return (
        <>
            <div className='flex flex-wrap justify-center bg-black'>
                <Image unoptimized={true} quality={100} className='w-[95%] mt-8' src={banner} alt="mais que e" />
                <HeroCardsContainer />
            </div>
        </>
    )
}

