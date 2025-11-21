import { type ChangeEvent } from "react";

interface SearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search(props: SearchProps) {
  return (
    <>
      <div className="text-black pl-5 cursor-pointer">
        <i className="w-20 h-20  bi bi-search text-black opacity-50"></i>
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Procurar Produto"
          className="text-black pl-7 border-none outline-none focus:outline-none"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
