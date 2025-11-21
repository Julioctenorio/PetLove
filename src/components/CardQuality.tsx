import { BadgeCheck, Gem, Heart, Truck } from "lucide-react";

export default function CardQuality() {

    return (
        <>
            <div className="p-4 shadow-lg rounded-xl flex flex-col items-center justify-center bg-[#FEF3C7] w-sm h-fit">
                <div className=" bg-lightorange flex items-center justify-center p-4 w-fit rounded-full">
                    <Heart className="w-10 h-10" />
                </div>

                <h1 className="font-bold text-xl text-amber-500"> Especialistas em Pet Care </h1>
                <p className="py-2">Nossa equipe entende o que seu pet precisa para se manter saudável e feliz</p>
            </div>

            <div className="p-4 shadow-lg rounded-xl flex flex-col items-center justify-center bg-[#FEF3C7] w-sm h-fit">
                <div className=" bg-lightorange flex items-center justify-center p-4 w-fit rounded-full">
                    <Truck className="w-10 h-10" />
                </div>

                <h1 className="font-bold text-xl text-amber-500"> Entrega Rápida </h1>
                <p className="py-2">Entrega grátis em pedidos acima de 50€. Receba seu produto rapidamente.</p>
            </div>

            <div className="p-4 shadow-lg rounded-xl flex flex-col items-center justify-center bg-[#FEF3C7] w-sm h-fit">
                <div className=" bg-lightorange flex items-center justify-center p-4 w-fit rounded-full">
                    <Gem className="w-10 h-10" />
                </div>

                <h1 className="font-bold text-xl text-amber-500"> Qualidade Premium </h1>
                <p className="py-2">Entrega grátis em pedidos acima de 50€. Receba seu produto rapidamente.</p>
            </div>

            <div className="p-4 shadow-lg rounded-xl flex flex-col items-center justify-center bg-[#FEF3C7] w-sm h-fit">
                <div className=" bg-lightorange flex items-center justify-center p-4 w-fit rounded-full">
                    <BadgeCheck className="w-10 h-10" />
                </div>

                <h1 className="font-bold text-xl text-amber-500"> Reembolso Garantido </h1>
                <p className="py-2">Não está satisfeito? Oferecemos garantia  de devolução do dinheiro em 30 dias para todos os produtos</p>
            </div>
        </>

    )
}