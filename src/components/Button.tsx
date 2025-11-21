"use client";

export function OrangeButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="p-2.5 bg-linear-to-r from-[#F59E0B] to-[#FBBF24] w-60 h-11 rounded-[10px] flex justify-center items-center cursor-pointer text-white shadow-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export function GrayButton({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="p-2.5 bg-gray-400 opacity-85 w-60 h-11 rounded-[10px] flex justify-center items-center cursor-pointer text-[#ffdea5] shadow-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
}