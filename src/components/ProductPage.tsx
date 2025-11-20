import { ArrowLeft, Heart } from "lucide-react"
import Shampoo from "../images/Shampoo.png"


export default function ProductPage() {

    return (



        <div className="flex flex-col border border-black bg-white w-[393px] h-fit">
            <div className="p-3.5">
                <ArrowLeft />
            </div>

            <h1 className="self-center font-bold text-2xl">Shampoo Neutro Sanol</h1>


            <div className="p-4 w-[393px] h-[393px]">
                <img src="/images/Shampoo.png"
                    alt="shampoo neutro para caes e gatos" />

            </div>
            <div className="self-end p-7">
                <Heart className="text-black hover:text-red-500 " />
            </div>

<div className="flex gap-2 m-2">

    <p>4,9</p>
    <Heart />
    <p>500+</p>
</div>
<div className="w-full flex justify-between">
    <p>2499€</p>
    <p>10 em stock</p>
</div>


        </div>


    )
}