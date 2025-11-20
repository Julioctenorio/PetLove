"use client";
import Link from "next/link";
import DogSVG from "./Dog";
import Search from "./Search";
import { useState } from "react";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <nav className="flex w-full h-20 bg-[#1F2937] text-[#F59E0B] text-xl justify-between items-center px-10 fixed">
        <div className="flex text-yellow-400 items-center gap-2">
          <DogSVG />
          <p>PetLove</p>
        </div>
        <div className="hidden lg:flex items-center w-72 h-8 bg-[#F59E0B] rounded-3xl text-base">
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="hidden md:flex gap-10 text-base">
          <Link href="home">Home</Link>
          <Link href="products">Produtos</Link>
          <Link href="category">Categorias</Link>
          <Link href="about">About</Link>
        </div>
        <div className="flex items-center gap-3 md:hidden ">
          <i className="bi bi-search text-black text-3xl opacity-50 "></i>
          <i className="bi bi-list text-5xl cursor-pointer"></i>
        </div>
      </nav>
    </>
  );
}
