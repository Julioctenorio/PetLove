"use client";

import CardAnimal from "@/components/CardAnimal";
import CardCategory from "@/components/CardCategory";
import CardQuality from "@/components/CardQuality";
import ProductPage from "@/components/ProductPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <CardAnimal />
        <ProductPage />
        <CardCategory title="Ir para Categoria" description="uma qualquer" onClick={() => console.log('CardCategory')} />
        <CardQuality />
      </div>
      <div></div>
    </>
  );
}
