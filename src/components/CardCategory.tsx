/* eslint-disable @next/next/no-img-element */
import { OrangeButton } from "./Button";

export default function CardCategory(props: {
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div className="w-68 h-88 bg-[#FEF3C7] rounded-2xl shadow-xl p-4">
      <img src="/images/bowlfood.jpg" alt="tigela de comida para cao" className="rounded-lg" />
      <div className="px- pb-5">
        <div className="text-amber-500 text-lg font-semibold">
          {props.title}
        </div>
        <div className="text-gray-700 text-[.8rem]">{props.description}</div>
        <OrangeButton text="Ir Para Categoria" onClick={props.onClick} />
      </div>
    </div>
  );
}
