"use client"

import Button from "@/components/Button";
import CardAnimal from "@/components/CardAnimal";
import CardCategory from "@/components/CardCategory";
import CardQuality from "@/components/CardQuality";
import ProductPage from "@/components/ProductPage";
import Image from "next/image";

export default function Home() {

  return (
  <>
  <div>

  <CardAnimal/>
 <ProductPage/>
  <CardCategory/>
  <CardQuality/>
</div>
<div>

</div>
</>)
}