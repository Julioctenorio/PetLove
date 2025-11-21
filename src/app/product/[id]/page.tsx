"use client";

import IProduct from "../../types/products";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Product() {
  const [products, setProducts] = useState<IProduct>();
  const currPathname = usePathname();
  const id = currPathname.split("/");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://pet-shop-api.runcodeschool.com/api/product/${id[id.length - 1]}`
      );
      const data: IProduct = await response.json();
      setProducts(data);
    };
    fetchData();
  });

  return (
    <div className="bg-[#fffaed]">
      <Navbar />
      <div className="flex text-black">
        <button
          className="pl-2 pr-10 cursor-pointer text-2xl"
          onClick={() => router.back()}
        >
          {"<"}
          {"Voltar"}
        </button>
      </div>
      <div className="flex items-center justify-center pt-10 gap-72">
        {products?.images && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/bg-dog.jpg"
            alt={products.name || "Product image"}
            width={600}
            height={600}
            className="pb-28 pt-15"
          />
        )}
        <div className="text-black pb-40">
          <h1 className="w-full text-3xl tex">{products?.name}</h1>
          <div>
            <div className="py-10 ">{products?.description}</div>
            <div className="flex">
              {products?.rating}  
              ({products?.evaluations})
            </div>
          </div>
          <div className="text-2xl pl-80">€{products?.price?.toFixed(2)}</div>
          <div>Em Stock: {products?.stock}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
