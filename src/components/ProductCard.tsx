/* eslint-disable @next/next/no-img-element */
import { OrangeButton } from "./Button";
import IProduct from "@/app/types/products";
import { useRouter } from "next/navigation";

export default function ProductCard(props: { Product: IProduct }) {
  const navigate = useRouter();

  return (
    <div className="w-[361px] h-[450px] bg-[#FEF3C7] rounded-2xl shadow-xl p-4 border border-gray-200 md-[224.62px] ">
      <img src="/images/bowlfood.jpg" alt="tigela de comida para cao"></img>
      <div className="px-4 pb-5">
        <div className="text-amber-500 text-lg font-semibold">
          {props.Product.name}
        </div>
        <div className="text-gray-700 text-sm mt-1">
          {props.Product.description}
        </div>
        <OrangeButton
          text="Ver Detalhes"
          onClick={() => navigate.push(props.Product._id)}
        />
      </div>
    </div>
  );
}
