import { ArrowLeft, Heart } from "lucide-react"
import Shampoo from "../images/Shampoo.png"


export default function ProductPage() {

    return (


        <>
            <div className="flex flex-colgit bg-white w-[393px] h-fit">
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
                <div className="w-full flex justify-between p-2.5">
                    <p className="text-xl font-bold">2499€</p>
                    <p className="text-xs">10 em stock</p>
                </div>

            </div>
            <div className="bg-[#FEF3C7] w-[24.6rem] h-fit p-6">
                <h2 className="text-lg font-bold p-1.5">Descrição do Produto</h2>
                <p>O vento soprava suave, carregando o aroma doce das flores silvestres.
                    Entre as árvores, um raio de sol escapava, pintando o chão com manchas douradas.
                    Um gato curioso observava o movimento das folhas, como se fossem pequenos segredos dançantes.
                    Ao longe, o som de água corrente trazia uma sensação de calma e eternidade.</p>

            </div>
        </>
    )
}
