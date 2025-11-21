"use client";

import CardCategory from "@/components/CardCategory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { OrangeButton, GrayButton} from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="relative bg-[#a29f96] flex gap-20">
        <Navbar />
        <div className="w-full h-[calc(100dvh+2rem)] bg-hero" />
      </div>
        <div className="absolute w-md z-50 top-75 left-10 gap-3 opacit">
          <h1 className="w-lg text-7xl font-bold text-[#F59E0B] text-shadow-lg">Carinho em cada patinha</h1>
          <p className="w-md text-2xl mt-10">Produtos de qualidade para o seu amigo peludo</p>
          <div className="w-full flex mt-5 gap-3">
          <OrangeButton text="Ver Produtos" onClick={() => console.log("clicou")} />
          <GrayButton text="Ver Categoria" onClick={() => console.log("clicou")} />
          </div>
        </div>
      <div className="flex items-center flex-col bg-[#fff8de] pt-28 h-dvh">
        <h2 className="text-[2rem] font-semibold text-[#F59E0B] tracking-wide pb-4">
          Produtos em Destaque
        </h2>
        <p className="text-lg text-[#F59E0B] tracking-wide pb-12">
          Nossas escolhas
        </p>
        <div className="flex gap-4">
          <CardCategory
            title="Ração Premium"
            description="Mistura nutritiva para todas as raças"
            onClick={() => console.log("hello")}
          />
          <CardCategory
            title="Brinquedos"
            description="Para momentos divertidos"
            onClick={() => console.log("Brinquedos")}
          />
          <CardCategory
            title="Acessórios"
            description="Para passear e desfrutar"
            onClick={() => console.log("Acessórios")}
          />
          <CardCategory
            title="Higiene e Saúde"
            description="Para um bem-estar completo"
            onClick={() => console.log("Higiene e Saúde")}
          />
          <CardCategory
            title="Conforto"
            description="Casa e conforto animal"
            onClick={() => console.log("Conforto")}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
