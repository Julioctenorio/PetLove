"use client";

function Button({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      className="p-2.5 bg-linear-to-r from-[#F59E0B] to-[#FBBF24] w-60 h-11 rounded-[10px] flex justify-center items-center cursor-pointer text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
